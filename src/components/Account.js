import React from 'react';
import Projects from './Projects';
const cors = require('cors')({origin: true});

const AccountPage = () =>
  <div>
    <img className="img2" alt="handshake" src="./favicon.ico"></img>
    <Projects /> 
  </div>

export default AccountPage;
