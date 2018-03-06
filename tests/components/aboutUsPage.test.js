import React from 'react';
import { render, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

import '../setup';
import AboutUsPage from '../../components/AboutUsPage.jsx';

jest.mock('../../src/public/images/chat.png', () => jest.fn())

describe('<AboutUsPage />', () => {
  it('should render the necessary elements', () => {
    const wrapper = render(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('.about-us-text').text()).toContain('graphical representation');
  });
});
