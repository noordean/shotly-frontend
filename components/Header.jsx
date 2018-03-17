import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import $ from 'jquery';

import Button from './Button.jsx';
import ContactModal from './ContactModal.jsx';
import NavbarLink from './NavbarLink.jsx';
import AddNewUrlModal from './AddNewUrlModal.jsx';

import { shortenUrl } from '../actions/url';

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      originalUserUrl: '',
      regAuth: false,
      loginAuth: false
    };
    this.onChange = this.onChange.bind(this);
    this.shortenUrlHandler = this.shortenUrlHandler.bind(this);
    this.copyShortenedUrl = this.copyShortenedUrl.bind(this);
    this.signOutHandler = this.signOutHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      regAuth: nextProps.userRegistration.isAuthenticated,
      loginAuth: nextProps.userLogin.isAuthenticated
    });

    if (this.props.userRegistration.isAuthenticated || this.props.userLogin.isAuthenticated) {
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
    if (this.state.originalUserUrl.trim().length === 0) {
      return $.toaster('Kindly supply the url to shorten', '', 'danger');
    }

    this.props.shortenUrl(this.state.originalUserUrl);
    $('.copy').text('Copy');
  }

  copyShortenedUrl() {
    $('.shortened-link').append("<input type='text' id='copy-user-url' />")
    $("#copy-user-url").val($("#shortened-url").text())

    const copyText = document.getElementById('copy-user-url');
    copyText.select();
    document.execCommand('Copy');
    $("#copy-user-url").remove();

    $('.copy').text('Copied!');
  }
  
  signOutHandler() {
    this.setState({
      regAuth: false,
      loginAuth: false
    });
    localStorage.removeItem('token');
    this.context.router.history.push('/');
  }

  render() {
    const { shortenedUrl } = this.props.shortenedUrl;
    return (
      <div className="row header-wrapper">
        <div className="col-sm-6">
          <Link to="/" className="header-title">Shotly</Link>
        </div>
        <div className="col-sm-6">
          {
            this.state.regAuth || this.state.loginAuth || localStorage.token ?
            <div className="pull-right header-nav">
              <span data-toggle="modal" data-target="#newUrlModal">Create new url</span>
              <span>
                <a className="btn btn-danger btn-sm" onClick={this.signOutHandler}>Sign out</a>
              </span>
            </div> :
            <div className="pull-right header-nav">
              <span data-toggle="modal" data-target="#contactModal">Contact</span>
              <span>
                <NavbarLink text={"Sign in"} path={"/signin"} linkClass="btn btn-success btn-sm" />
              </span>
            </div>
          }
        </div>
        <ContactModal />
        <AddNewUrlModal
          originalUserUrl={this.state.originalUserUrl}
          onChange={this.onChange}
          onClick={this.shortenUrlHandler}
          shortenedUrl={shortenedUrl}
          copyShortenedUrl={this.copyShortenedUrl}
        />
      </div>
    )
  }
};

Header.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = state => ({
  userRegistration: state.userRegistration,
  userLogin: state.userLogin,
  shortenedUrl: state.shortenedUrl
});

const matchDispatchToProps = dispatch => bindActionCreators({
  shortenUrl
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Header);
