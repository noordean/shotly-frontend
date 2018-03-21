import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import $ from 'jquery';

import '../setup';
import { SignIn } from '../../components/SignIn.jsx';

global.$ = $;
global.$.toaster = () => {};
global.localStorage = {};

const props = {
  userLogin: {
    userDetails: {
      id: 1,
      username: 'noordean',
      token: 'some_jargons'
    },
    errorMessage: '',
    isAuthenticated: false
  },
  loginUser: () => {}
};

const mountWrapper = () => {
  return mount(
    <SignIn {...props} />
  );
};
describe('<SignIn />', () => {
  it('should render the necessary elements', () => {
    const wrapper = mount(
      <SignIn />
    );
    expect(wrapper.find('.btn-success').text()).toBe('Login');
    expect(wrapper.find('h4').text()).toBe('Login');
    expect(wrapper.find('label').length).toBe(2);    
  });

  it('should call onChange when login form is being filled', () => {
    const spy = sinon.spy(SignIn.prototype, 'onChange');
    const wrapper = mountWrapper();
    wrapper.find('.submit-url-input').first().simulate('change');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call handleUserLogin() when login button is clicked', () => {
    const spy = sinon.spy(SignIn.prototype, 'handleUserLogin');
    const wrapper = mountWrapper();
    wrapper.find('.login-btn').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call componentWillReceiveProps() when props change', () => {
    const spy = sinon.spy(SignIn.prototype, 'componentWillReceiveProps');
    const wrapper = mountWrapper();
    wrapper.setProps({ ...props,
      userLogin: { ...props.userLogin, errorMessage: 'something happened' }
    });
    expect(spy.calledOnce).toBe(true);
  });
});
