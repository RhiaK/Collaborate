import React, { Component } from 'react';
import logo from './cefc2f98238225ef4e66d6f922fdd376.png';
import './App.css';
var firebase = require('firebase');
var firebaseui = require('firebaseui');

var fontStyle = {
  fontFamily: 'Alegreya Sans SC'
};
// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
// Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
// Terms of service url.
  tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={fontStyle}>
          <h1 className="App-title">Collaborate</h1>
          <h3 className="App-title">Sign Up</h3>
        </header>
        <img className="logo" src= {logo} alt="handshake" />
        <footer>
        </footer>
      </div>
    );
  }
}

export default App;
