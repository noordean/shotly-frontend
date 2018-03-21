import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import $ from 'jquery';

import '../setup';
import { SignUp } from '../../components/SignUp.jsx';


global.$ = $;
global.$.toaster = () => {};
global.localStorage = {};

const props = {
  userRegistration: {
    userDetails: {
      id: 1,
      username: 'noordean',
      token: 'some_jargons'
    },
    errorMessage: '',
    isAuthenticated: false
  }
};

const mountWrapper = () => {
  return mount(
    <SignUp {...props} />
  );
}

describe('<SignUp />', () => {
  it('should render the necessary elements', () => {
    const wrapper = mount(
      <SignUp {...props} />
    );
    expect(wrapper.find('.btn-block').text()).toBe('Create my account');
    expect(wrapper.find('h4').text()).toBe('Sign Up');
    expect(wrapper.find('label').length).toBe(4);    
  });

  it('should call onChange when registration form is being filled', () => {
    const spy = sinon.spy(SignUp.prototype, 'onChange');
    const wrapper = mountWrapper();
    wrapper.find('.submit-url-input').first().simulate('change');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call handleUserRegistration() when registration button is clicked', () => {
    const spy = sinon.spy(SignUp.prototype, 'handleUserRegistration');
    const wrapper = mountWrapper();
    wrapper.find('.create-account').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call componentWillReceiveProps() when props change', () => {
    const spy = sinon.spy(SignUp.prototype, 'componentWillReceiveProps');
    const wrapper = mountWrapper();
    wrapper.setProps({ ...props,
        userRegistration: { ...props.userRegistration, errorMessage: 'something happend' }
    });
    expect(spy.calledOnce).toBe(true);
  });
});
