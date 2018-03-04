import React from 'react';

import Input from './Input.jsx';
import Button from './Button.jsx';

export default class SignIn extends React.Component {

  render() {
    return (
      <div className="row form-page">
          <form>
          <h4>Login</h4>
          <div className="form-group">
            <label>Email</label>
            <Input
              inputType="email"
              inputPlaceHolder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Input
              inputType="password"
              inputPlaceHolder="Enter password"
            />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Button
                  btnClass="btn btn-success"
                  text="Login"
              />
            </div>
            <div className="col-sm-6 social-login-icons">
              <span className="fa fa-facebook"></span>
              <span className="fa fa-google"></span>
            </div>
          </div>
          </form>
      </div>
    )
  }
};
