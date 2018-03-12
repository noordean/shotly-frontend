import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

require('../src/public/styles/style.scss');
require('../src/public/js/jquery.toaster.js');

const App = props => (
  <div class='page'>
    <Header />
      {props.children}
    <Footer />
  </div>
);

export default App;
