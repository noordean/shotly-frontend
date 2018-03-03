import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../../components/Footer.jsx';

describe('<Footer />', () => {
  it('should render the necessary elements', () => {
      const rendered = renderer.create(
        <Footer />
      );
      expect(rendered.toJSON()).toMatchSnapshot();
  });
});
