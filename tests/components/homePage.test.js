import React from 'react';
import { render, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import sinon from 'sinon';
import $ from 'jquery';

import '../setup';
import { HomePage } from '../../components/HomePage.jsx';

global.$ = $;
global.$.toaster = () => {};
global.document.getElementById = () => ({
  select: () => {}
});
global.document.execCommand = () => {};
global.localStorage = {};

const props = {
  shortenedUrl: {
    shortenedUrl: {
      id: 1,
      shortened_url: 'https://shotly.com/ad',
      original_url: 'http://verylongandugly.com/somethinglong'
    },
    errorMessage: ''
  }
};

const mountWrapper = () => {
  return mount(
    <MemoryRouter>
      <HomePage {...props} />
    </MemoryRouter>
  );
}

describe('<HomePage />', () => {
  it('should render the necessary elements', () => {
    const wrapper = render(
      <MemoryRouter>
        <HomePage {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find('h5').text()).toContain('organizations');
    expect(wrapper.find('h6').text()).toContain('millions');
  });

  it('should call shortenUrlHandler() when url-submit button is clicked', () => {
    const spy = sinon.spy(HomePage.prototype, 'shortenUrlHandler');
    const wrapper = mountWrapper();
    wrapper.find('.url-submit').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call copyShortenedUrl() when copy button is clicked', () => {
    const spy = sinon.spy(HomePage.prototype, 'copyShortenedUrl');
    const wrapper = mountWrapper();
    wrapper.find('.copy').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call onChange when submit input is being filled', () => {
    const spy = sinon.spy(HomePage.prototype, 'onChange');
    const wrapper = mountWrapper();
    wrapper.find('.submit-url-input').simulate('change');
    expect(spy.calledOnce).toBe(true);
  });
});
