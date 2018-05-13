import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from '../firebase';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import HomePage from './Home';
import AccountPage from './Account';
import Header from './Header';
import CreateForm from './CreateForm';
import './App.css';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';

const cors = require('cors')({origin: true});


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
          <div>
            <Navigation authUser={this.state.authUser} />
            <Route
              exact path={routes.LANDING}
              component={() => <LandingPage />}
            />
            <Route
              exact path={routes.SIGN_UP}
              component={() => <SignUpPage />}
            />
            <Route
              exact path={routes.SIGN_IN}
              component={() => <SignInPage />}
            />
            <Route
              exact path={routes.HOME}
              component={() => <HomePage />}
            />
            <Route
              exact path={routes.ACCOUNT}
              component={() => <AccountPage />}
            /> 
            <Route
              exact path={routes.CREATE_FORM}
              component={() => <CreateForm />}
            />  
          </div> 
        </Router>
        <footer>
          <p>© 2018 Rhiannon Kaulitzke. All rights reserved.</p>
        </footer>
      </div>  
    );
  }
}



export default App;
