import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button.jsx';

export default class Header extends React.Component {

  render() {
    return (
      <div className="row header-wrapper">
        <div className="col-sm-6">
          <Link to="/" className="header-title">Shotly</Link>
        </div>
        <div className="col-sm-6">
          <div className="pull-right header-nav">
            <span>Contact</span>
            <span>
              <Link to='/signin' className="btn btn-success btn-sm">
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
};
