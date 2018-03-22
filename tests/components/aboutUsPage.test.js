import React from 'react';
import { render, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';

import '../setup';
import { AboutUsPage } from '../../components/AboutUsPage.jsx';

jest.mock('../../src/public/images/chat.png', () => jest.fn())

global.document.getElementById = () => ({
  src: ''
});

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

  it('should call componentDidMont() when the page renders', () => {
    const spy = sinon.spy(AboutUsPage.prototype, 'componentDidMount');
    const wrapper = mount(
      <MemoryRouter>
        <AboutUsPage />
      </MemoryRouter>
    );
    expect(spy.calledOnce).toBe(true);
  });
});
