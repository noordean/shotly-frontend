import React from 'react';
import { mount } from 'enzyme';

import '../setup';
import Header from '../../components/Header.jsx';

describe('<Header />', () => {
  it('should render the necessary elements', () => {
  const wrapper = mount(
      <Header />
  );
  const title = wrapper.find('.header-title');
  const span = wrapper.find('span')
  expect(title.text()).toBe('Shotly');
  expect(span.length).toBe(3);
  });
});
