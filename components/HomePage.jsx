import React from 'react';

import Header from './Header.jsx';
import HomePageBody from './HomePageBody.jsx';
import Footer from './Footer.jsx';

export default class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <HomePageBody />
        <Footer />
      </div>
    )
  }
};
