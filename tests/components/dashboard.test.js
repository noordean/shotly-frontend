import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'

import '../setup';
import Dashboard from '../../components/Dashboard.jsx';

global.localStorage = {
  token: 'some_jargons'
};

describe('<Dashboard />', () => {
  it('should render the necessary elements', () => {
    const wrapper = render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );
    expect(wrapper.find('#myChart').length).toBe(1);
    expect(wrapper.find('.toplinks-table').length).toBe(1);
    expect(wrapper.find('#editModal').length).toBe(1);
  });
});
