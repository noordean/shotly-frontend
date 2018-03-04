import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

require('../src/public/styles/style.scss');

const App = props => (
  <div class='page'>
    <Header />
      {props.children}
    <Footer />
  </div>
);

export default App;
