import React from 'react';
import { mount } from 'enzyme';

import '../setup';
import SignIn from '../../components/SignIn.jsx';

describe('<SignIn />', () => {
  it('should render the necessary elements', () => {
    const wrapper = mount(
      <SignIn />
    );
    expect(wrapper.find('.btn-success').text()).toBe('Login');
    expect(wrapper.find('h4').text()).toBe('Login');
    expect(wrapper.find('label').length).toBe(2);    
  });
});
