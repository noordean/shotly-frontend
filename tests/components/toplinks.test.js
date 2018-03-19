import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';

import '../setup';
import TopLinks from '../../components/TopLinks.jsx';

const props = {
  userUrls: [{
      id: 1,
      shortened_url: 'https://shotly.com/ad',
      original_url: 'http://verylongandugly.com/somethinglong',
      user_id: 1
  }]
};

describe('<TopLinks />', () => {
  it('should render the necessary elements', () => {
    const wrapper = render(
      <MemoryRouter>
        <TopLinks {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find('.url-anchor').length).toBe(1);
  });
});
