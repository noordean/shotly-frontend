import React from 'react';
import { render, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import sinon from 'sinon';

import '../setup';
import { Dashboard } from '../../components/Dashboard.jsx';

global.localStorage = {
  token: 'some_jargons'
};

const props = {
  userUrls: {
    urls: [{
      id: 1,
      shortened_url: 'https://shotly.com/ad',
      original_url: 'http://verylongandugly.com/somethinglong',
      user_id: 1
    }],
    errorMessage: ''
  },
  deletedUrl: {
    message: { message: 'Deleted successfully' },
    errorMessage: ''
  },
  updatedUrl: {
    url: {
      id: 1,
      shortened_url: 'https://shotly.com/ad',
      original_url: 'http://verylongandugly.com/somethinglong',
      user_id: 1
    },
    errorMessage: ''
  },
  getUrls: () => Promise.resolve(),
};

const mountWrapper = () => {
  return mount(
    <Dashboard {...props} />
  );
};

describe('<Dashboard />', () => {
  it('should call componentWillReceiveProps() and prepareUserUrls() when props change', () => {
    const spyComponentWillReceiveProps = sinon.spy(Dashboard.prototype, 'componentWillReceiveProps');
    const spyPrepareUserUrls = sinon.spy(Dashboard.prototype, 'prepareUserUrls');    
    const wrapper = mountWrapper();
    wrapper.setProps({ ...props,
        userUrls: { ...props.userUrls, errorMessage: 'something happened', urls: [] }
    });
    expect(spyComponentWillReceiveProps.calledOnce).toBe(true);
    expect(spyPrepareUserUrls.calledOnce).toBe(true);
  });
});
