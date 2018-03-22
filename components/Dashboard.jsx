import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';

import Input from './Input.jsx';
import Button from './Button.jsx';
import TopLinks from './TopLinks.jsx';
import HomePage from './HomePage.jsx';

import { getUrls } from '../actions/url'
import { updateUrl } from '../actions/url';
import { deleteUrl } from '../actions/url';


export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userUrls: [],
      isLoading: true,
      urlToEdit: '',
      selectedUrlId: '',
      selectedUrlChars: ''
    };
    this.displayChart = this.displayChart.bind(this);
    this.updateUserUrl = this.updateUserUrl.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getSelectedUrl = this.getSelectedUrl.bind(this);
    this.deleteUrlHandler = this.deleteUrlHandler.bind(this);
    this.getSelectedLinkRow = this.getSelectedLinkRow.bind(this);
  }

  componentDidMount() {
    this.props.getUrls(localStorage.token).then(() => {
      const locationData = this.extractSelectedLocation(this.props.userUrls.urls[0][0].id);
      this.displayChart(locationData.countries, locationData.numberOfClicks);
    });
  }

  displayChart(labels, data) {
    if (localStorage.token && this.state.userUrls.length !== 0) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const urlChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels,
              datasets: [{
                  label: '# of times visited',
                  data,
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(0, 128, 128, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userUrls !== nextProps.userUrls) {
      this.prepareUserUrls(nextProps.userUrls);
    }

    if (this.props.updatedUrl.url !== nextProps.updatedUrl.url) {
      if (nextProps.updatedUrl.errorMessage !== '') {
        return $.toaster(nextProps.updatedUrl.errorMessage, '', 'danger');
      }
      
      $.toaster('Link renamed successfully', '', 'success');
      this.props.getUrls(localStorage.token);
    }

    if (this.props.deletedUrl !== nextProps.deletedUrl) {
      if (nextProps.deletedUrl.errorMessage !== '') {
        return $.toaster(nextProps.updatedUrl.errorMessage, '', 'danger');
      }

      $.toaster('Link successfully deleted', '', 'success');
      this.props.getUrls(localStorage.token);
    }
  }

  prepareUserUrls(userUrls) {
    const urls = [];
    userUrls.urls.forEach((url) => {
      urls.push(url[0]);
    });

    this.setState({
      userUrls: urls,
      isLoading: false
    });
  }

  updateUserUrl() {
    this.props.updateUrl(localStorage.token, this.state.selectedUrlId, this.state.urlToEdit);
  }

  onChange(element) {
    this.setState({
      [element.target.name]: element.target.value,
    });
  }

  getShortenedCharacters(element) {
    const url = $(element.target).parent().parent().find('.url-anchor').text();
    return url.slice(url.lastIndexOf('/') + 1);
  }

  getSelectedUrl(element) {
    this.setState({
      selectedUrlId: $(element.target).parent().parent().attr('id'),
      selectedUrlChars: this.getShortenedCharacters(element)
    });
  }

  deleteUrlHandler(element) {
    const selectedId = $(element.target).parent().parent().attr('id');
    this.props.deleteUrl(localStorage.token, selectedId);
  }

  getSelectedLinkRow(element) {
    if (this.extractSelectedLocation($(element.target).parent().attr('id')) !== false) {
      const locationData = this.extractSelectedLocation($(element.target).parent().attr('id'));
      this.displayChart(locationData.countries, locationData.numberOfClicks);
    }
  }

  extractSelectedLocation(selectedId) {
    let locations = [];
    if (selectedId === undefined) {
      return false;
    }
    this.props.userUrls.urls.forEach((url) => {
      if (url[0].id == selectedId) {
        locations = url[1];
      }
    });

    return this.getLinkData(locations);
  }

  getLinkData(locations) {
    const countries = [];
    const numberOfClicks = [];
    locations.forEach((location) => {
      countries.push(location.country);
      numberOfClicks.push(location.number_of_click);
    });

    return {
      countries,
      numberOfClicks
    };
  }

  render() {
    if (!localStorage.token) {
      return <Redirect to='/' />;
    } else {
      if (this.state.isLoading) {
        return <div className="dashboard-msg">Loading...</div>
      } else if (this.state.userUrls.length === 0) {
        return <div className="dashboard-msg"> No URL to display </div>
      }
      return (
        <div className="row dashboard">
          <div className="toplinks-wrapper">
            <TopLinks
              userUrls={this.state.userUrls}
              editUrl={this.updateUserUrl}
              onChange={this.onChange}
              urlToEdit={this.state.urlToEdit}
              getSelectedUrl={this.getSelectedUrl}
              selectedUrlChars={this.state.selectedUrlChars}
              deleteUrlHandler={this.deleteUrlHandler}
              getSelectedLinkRow={this.getSelectedLinkRow}
            />
          </div>
          <div className="chart-area">
            <canvas id="myChart" width="1200" height="300"></canvas>
          </div>
        </div>
      );
    }
  }
};

const mapStateToProps = state => ({
  userUrls: state.userUrls,
  updatedUrl: state.updatedUrl,
  deletedUrl: state.deletedUrl
});

const matchDispatchToProps = dispatch => bindActionCreators({
  getUrls,
  updateUrl,
  deleteUrl
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
