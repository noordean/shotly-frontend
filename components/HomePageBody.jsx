import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

export default class HomePageBody extends React.Component {

  render() {
    return (
      <div className="row homepage-body-wrapper">
        <div>
          <h5> We help organizations track and visualize their business growth around the world </h5>
          <h6 className="second-text"> From hundreds to millions. No limits with Shotly. </h6>
          <div className="btn-wrapper">
            <Button
              btnClass="btn btn-info btn-lg"
              text="See how"
            />
            <Button
              btnClass="btn btn-success btn-lg"
              text="Create an account"
            />
          </div>
          <div className="row submit-form">
            <div className="col-sm-10">
              <Input
                inputType="text"
                inputPlaceHolder="Enter url"
              />
            </div>
            <div className="col-sm-2 url-submit-wrapper">
              <Button
                btnClass="btn url-submit"
                text="Shorten"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};
