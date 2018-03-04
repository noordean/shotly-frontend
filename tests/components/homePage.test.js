import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

import '../setup';
import HomePage from '../../components/HomePage.jsx';

describe('<HomePage />', () => {
  it('should render the necessary elements', () => {
    const wrapper = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(wrapper.find('h5').text()).toContain('organizations');
    expect(wrapper.find('h6').text()).toContain('millions');
  });
});
