import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';


import Input from './Input.jsx';
import Button from './Button.jsx';

import { loginUser } from '../actions/user';
import { hasEmptyField } from '../utils/validation';

export class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleUserLogin() {
    if (hasEmptyField(this.state)) {
      return $.toaster('All fields must be supplied', '', 'danger');
    } else {
      this.props.loginUser(this.state);
    }
  }

  onChange(element) {
    this.setState({
      [element.target.name]: element.target.value,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userLogin.isAuthenticated) {
      this.context.router.history.push('/dashboard');
    } else {
      $.toaster(nextProps.userLogin.errorMessage, '', 'danger');
    }
  }

  render() {
    if (localStorage.token) {
      return <Redirect to='/dashboard' />;
    }
    return (
      <div className="row form-page">
          <form>
          <h4>Login</h4>
          <div className="form-group">
            <label>Email</label>
            <Input
              inputName="username"
              inputType="text"
              inputPlaceHolder="Enter username"
              inputValue={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <Input
              inputName="password"
              inputType="password"
              inputPlaceHolder="Enter password"
              inputValue={this.state.password}
              onChange={this.onChange}
            />
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Button
                btnClass="btn btn-success login-btn"
                text="Login"
                onClick={this.handleUserLogin}
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

SignIn.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = state => ({
  userLogin: state.userLogin
});

const matchDispatchToProps = dispatch => bindActionCreators({
  loginUser
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(SignIn);
