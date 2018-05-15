import React from 'react';
import firebase from 'firebase';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay'
const firebaseRef = firebase.database();


const AccountPage = () =>
  <div className="App">
    <img className="img2" alt="handshake" src="./favicon.ico"></img>
    <h1 className="App">Projects</h1>
    <ThreadDisplay db={firebaseRef}/> 
  </div>

export default AccountPage;
