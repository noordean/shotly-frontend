import React from 'react';

import HomePage from './HomePage.jsx';

require('../src/public/styles/homePage.scss');

export default class Link extends React.Component {

  render() {
    return (
      <div class='page'>
        <HomePage />
      </div>
    )
  }
};
