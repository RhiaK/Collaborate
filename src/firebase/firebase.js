import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyClUztdUeVvfd6pV--OUGtCShi9AN-dwB4",
    authDomain: "collaborate3-1234.firebaseapp.com",
    databaseURL: "https://collaborate3-1234.firebaseio.com",
    projectId: "collaborate3-1234",
    storageBucket: "",
    messagingSenderId: "841289549058"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();



export default firebase;
export {
  auth
};
