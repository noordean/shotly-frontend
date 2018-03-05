import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

import '../setup';
import Header from '../../components/Header.jsx';

describe('<Header />', () => {
  it('should render the necessary elements', () => {
  const wrapper = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const title = wrapper.find('.header-title');
  const span = wrapper.find('span')
  expect(title.text()).toBe('Shotly');
  expect(span.length).toBe(3);
  expect(wrapper.find('.modal').length).toBe(1)
  expect(wrapper.find('.modal-title').text()).toBe('Contact us');
  });
});
