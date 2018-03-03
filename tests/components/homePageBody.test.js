import React from 'react';
import { mount } from 'enzyme';

import '../setup';
import HomePageBody from '../../components/HomePageBody.jsx';

describe('<HomePageBody />', () => {
  it('should render the necessary elements', () => {
    const wrapper = mount(
      <HomePageBody />
    );
    expect(wrapper.find('h5').text()).toContain('organizations');
    expect(wrapper.find('h6').text()).toContain('millions');
  });
});
