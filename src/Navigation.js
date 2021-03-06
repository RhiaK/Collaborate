import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOut';
import './App.css';

import * as routes from './constants/routes';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>
  
const NavigationAuth = () =>  
      <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.ACCOUNT}>Projects</Link></li>
        <li><SignOutButton /></li>  
      </ul>   

const NavigationNonAuth = () => 
      <ul>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
        <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
      </ul>


export default Navigation;