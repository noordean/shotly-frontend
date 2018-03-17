import React from 'react';
import { render, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import $ from 'jquery';

import '../setup';
import { Header } from '../../components/Header.jsx';

global.$ = $;
global.$.toaster = () => {};
global.document.getElementById = () => ({
  select: () => {}
});
global.document.execCommand = () => {};

const props = {
  userRegistration: {
    userDetails: {
      id: 1,
      username: 'noordean',
      token: 'some_jargons'
    },
    errorMessage: '',
    isAuthenticated: false
  },
  userLogin: {
    userDetails: {
      id: 1,
      username: 'noordean',
      token: 'some_jargons'
    },
    errorMessage: '',
    isAuthenticated: false
  },
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
      <Header {...props} />
    </MemoryRouter>
  );
};

describe('<Header />', () => {
  it('should render the necessary elements', () => {
    const wrapper = render(
      <MemoryRouter>
        <Header {...props} />
      </MemoryRouter>
    );
    const title = wrapper.find('.header-title');
    const span = wrapper.find('span')
    expect(title.text()).toBe('Shotly');
    expect(span.length).toBe(4);
    expect(wrapper.find('.modal').length).toBe(2)
    expect(wrapper.find('.modal-title').text()).toBe('Contact usCreate URL');
  });

  it('should call onChange when addUrl input is being filled', () => {
    const spy = sinon.spy(Header.prototype, 'onChange');
    const wrapper = mountWrapper();
    wrapper.find('.submit-url-input').last().simulate('change');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call shortenUrlHandler() when url-submit button is clicked', () => {
    const spy = sinon.spy(Header.prototype, 'shortenUrlHandler');
    const wrapper = mountWrapper();
    wrapper.find('.shorten-user-url').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });

  it('should call copyShortenedUrl() when copy button is clicked', () => {
    const spy = sinon.spy(Header.prototype, 'copyShortenedUrl');
    const wrapper = mountWrapper();
    wrapper.find('.copy').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });
});
