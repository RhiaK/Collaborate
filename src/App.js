import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';

import Auth from './firebase';
import Navigation from './Navigation';
import LandingPage from './Landing';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';

import AccountPage from './Account';
import Header from './Header';
import './App.css';

import * as routes from './constants/routes';
import firebase from 'firebase';



// var config = {
//     apiKey: "AIzaSyClUztdUeVvfd6pV--OUGtCShi9AN-dwB4",
//     authDomain: "collaborate3-1234.firebaseapp.com",
//     databaseURL: "https://collaborate3-1234.firebaseio.com",
//     projectId: "collaborate3-1234",
//     storageBucket: "",
//     messagingSenderId: "841289549058"
//   };
//   firebase.initializeApp(config);
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  componentDidMount() {
  const firebase=require('firebase');
    firebase.auth().onAuthStateChanged(authUser => {
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
              exact path={routes.ACCOUNT}
              component={() => <AccountPage />}
            />  
          </div> 
        </Router>
        <footer>
          <p className="font">© 2018 Rhiannon Kaulitzke. All rights reserved.</p>
        </footer>
      </div>  
    );
  }
}



export default App;
