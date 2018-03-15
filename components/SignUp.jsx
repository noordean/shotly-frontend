import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import $ from 'jquery';

import Input from './Input.jsx';
import Button from './Button.jsx';

import { registerUser } from '../actions/user';
import { hasEmptyField } from '../utils/validation';


export class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      retypedPassword: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleUserRegistration = this.handleUserRegistration.bind(this);
  }

  onChange(element) {
    this.setState({
      [element.target.name]: element.target.value,
    });
  }

  handleUserRegistration() {
    if (hasEmptyField(this.state)) {
      return $.toaster('All fields must be supplied', '', 'danger');
    } else if (this.state.password !== this.state.retypedPassword) {
      return $.toaster('The passwords do not match', '', 'danger');
    } else {
      this.props.registerUser(this.state);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.userRegistration.isAuthenticated) {
      this.context.router.history.push('/dashboard');
    } else {
      $.toaster(nextProps.userRegistration.errorMessage, '', 'danger');
    }
  }

  render() {
    return (
      <div className="row form-page">
          <form>
          <h4>Sign Up</h4>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <Input
                inputName="email"
                inputType="text"
                inputPlaceHolder="Enter email"
                inputValue={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Username</label>
              <Input
                inputName="username"
                inputType="text"
                inputPlaceHolder="Enter username"
                inputValue={this.state.username}
                onChange={this.onChange}
              />
            </div>
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
          <div className="form-group">
            <label>Confirm Password</label>
            <Input
              inputName="retypedPassword"
              inputType="password"
              inputPlaceHolder="Retype password"
              inputValue={this.state.retypedPassword}
              onChange={this.onChange}
            />
          </div>
          <Button
            btnClass="btn btn-success btn-block create-account"
            text="Create my account"
            onClick={this.handleUserRegistration}
          />
          </form>
      </div>
    )
  }
};

SignUp.contextTypes = {
  router: PropTypes.object
}

const mapStateToProps = state => ({
  userRegistration: state.userRegistration
});

const matchDispatchToProps = dispatch => bindActionCreators({
  registerUser
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(SignUp);
