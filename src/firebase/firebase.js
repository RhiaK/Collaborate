import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBP4OhQm8r3eZmlQlfWMyi6n3VYOOKlhoY",
    authDomain: "collaborate-now.firebaseapp.com",
    databaseURL: "https://collaborate-now.firebaseio.com",
    projectId: "collaborate-now",
    storageBucket: "",
    messagingSenderId: "670646941571"
};

firebase.initializeApp(config);


const auth = firebase.auth();



export default firebase;
export {
  auth
};
