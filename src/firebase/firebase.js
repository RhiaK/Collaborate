import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCk9XoU1Agz1LvMaZgqTrPgBgZdPnLphVc",
    authDomain: "collaborate-4b360.firebaseapp.com",
    databaseURL: "https://collaborate-4b360.firebaseio.com",
    projectId: "collaborate-4b360",
    storageBucket: "collaborate-4b360.appspot.com",
    messagingSenderId: "1045228056630"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};
