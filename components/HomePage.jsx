import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import $ from 'jquery';

import Input from './Input.jsx';
import Button from './Button.jsx';
import ShortenedLink from './ShortenedLink.jsx';

import { shortenUrl } from '../actions/url';

export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      originalUrl: ''
    };
    this.onChange = this.onChange.bind(this);
    this.shortenUrlHandler = this.shortenUrlHandler.bind(this);
    this.copyShortenedUrl = this.copyShortenedUrl.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.shortenedUrl !== nextProps.shortenedUrl) {
      const errorMessage = nextProps.shortenedUrl.errorMessage;
      if (errorMessage !== '') {
        return $.toaster(errorMessage, '', 'danger');
      }
    }
  }

  onChange(element) {
    this.setState({
      [element.target.name]: element.target.value,
    });
  }

  shortenUrlHandler() {
    if (this.state.originalUrl.trim().length === 0) {
      return $.toaster('Kindly supply the url to shorten', '', 'danger');
    }

    this.props.shortenUrl(this.state.originalUrl);
    $('.copy').text('Copy');
  }

  copyShortenedUrl() {
    $('.submit-form').append("<input type='text' id='copy-url' />");
    $("#copy-url").val($("#shortened-url").text());

    const copyText = document.getElementById('copy-url');
    copyText.select();
    document.execCommand('Copy');
    $("#copy-url").remove();

    $('.copy').text('Copied!');
  }

  componentWillUnmount() {
    this.props.shortenedUrl.shortenedUrl = {};
    this.props.shortenedUrl.errorMessage = '';
  }

  render() {
    if (localStorage.token) {
      return <Redirect to='/dashboard' />;
    } else {
        const { shortenedUrl } = this.props.shortenedUrl;
        return (
          <div className="row homepage-body-wrapper">
            <div>
              <h5> We help organizations track and visualize their business growth around the world </h5>
              <h6 className="second-text"> From hundreds to millions. No limits with Shotly. </h6>
              <div className="btn-wrapper">
                <Link to='/aboutus' className="btn btn-info btn-lg">
                  See how
                </Link>
                <Link to='/signup' className="btn btn-success btn-lg">
                  Create an account
                </Link>
              </div>
              <div className="row submit-form">
                <div className="col-sm-10">
                  <Input
                    inputName="originalUrl"
                    inputType="text"
                    inputPlaceHolder="Enter url"
                    inputValue={this.state.originalUrl}
                    onChange={this.onChange}
                  />
                </div>
                <div className="col-sm-2 url-submit-wrapper">
                  <Button
                    btnClass="btn url-submit"
                    text="Shorten"
                    onClick={this.shortenUrlHandler}
                  />
                </div>
                {Object.keys(shortenedUrl).length !== 0 ? <ShortenedLink shortenedUrl={shortenedUrl.shortened_url} copyUrl={this.copyShortenedUrl} /> : ''}
              </div>
            </div>
          </div>
        )
    }
  }
};

const mapStateToProps = state => ({
  shortenedUrl: state.shortenedUrl
});

const matchDispatchToProps = dispatch => bindActionCreators({
  shortenUrl
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
