import React from 'react';
import { mount } from 'enzyme';

import '../setup';
import SignUp from '../../components/SignUp.jsx';

describe('<SignUp />', () => {
  it('should render the necessary elements', () => {
    const wrapper = mount(
      <SignUp />
    );
    expect(wrapper.find('.btn-block').text()).toBe('Create my account');
    expect(wrapper.find('h4').text()).toBe('Sign Up');
    expect(wrapper.find('label').length).toBe(4);    
  });
});
