import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Chart from 'chart.js';
import { connect } from 'react-redux';

import Input from './Input.jsx';
import Button from './Button.jsx';
import TopLinks from './TopLinks.jsx';
import HomePage from './HomePage.jsx';


export class Dashboard extends React.Component {

  componentDidMount() {
    if (localStorage.token) {
      const ctx = document.getElementById("myChart").getContext("2d");
      const urlChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: ['Nigeria', 'Kenya', 'Germany', 'US', 'Singapore', 'Uganda'],
              datasets: [{
                  label: '# of times visited',
                  data: [12, 19, 3, 5, 2, 3],
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
                          beginAtZero:true
                      }
                  }]
              }
          }
      });
    }
  }

  render() {
    if (!localStorage.token) {
      return <Redirect to='/' />;
    } else {
      return (
        <div className="row dashboard">
          <div className="toplinks-wrapper">
            <TopLinks />
          </div>
          <div className="chart-area">
            <canvas id="myChart" width="1200" height="300"></canvas>
          </div>
        </div>
      );
    }
  }
};

export default Dashboard;
