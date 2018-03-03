import React from 'react';

import Button from './Button.jsx';

export default class Header extends React.Component {

  render() {
    return (
      <div className="row header-wrapper">
        <div className="col-sm-6">
          <span className="header-title">Shotly</span>
        </div>
        <div className="col-sm-6">
          <div className="pull-right header-nav">
            <span>Contact</span>
            <span>
              <Button
                btnClass="btn btn-success btn-sm"
                text="Sign in"
              />
            </span>
          </div>
        </div>
      </div>
    )
  }
};
