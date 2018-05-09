import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';

var fontStyle = {
  fontFamily: 'Alegreya Sans SC'
};
//style={fontStyle}>


const App = () =>
  <Router>
    <Navigation />
  </Router>

export default App;
