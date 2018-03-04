import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

export default class SignUp extends React.Component {

  render() {
    return (
      <div className="row form-page">
          <form>
          <h4>Sign Up</h4>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <Input
                inputType="text"
                inputPlaceHolder="Enter email"
              />
            </div>
            <div className="form-group col-md-6">
              <label>Username</label>
              <Input
                inputType="text"
                inputPlaceHolder="Enter username"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <Input
              inputType="password"
              inputPlaceHolder="Enter password"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <Input
              inputType="text"
              inputPlaceHolder="Retype password"
            />
          </div>
          <Button
            btnClass="btn btn-success btn-block"
            text="Create my account"
          />
          </form>
      </div>
    )
  }
};
