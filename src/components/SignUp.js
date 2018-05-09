import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null 
    };  
    
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this);

    handleChange(e) {
      this.setState({
       [e.target.name]: e.target.value
      });
    }

    logout() {
      auth.signOut()
        .then(() => {
          this.setState({
           user: null
          });
        });
    }

    login() {
      auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }

    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } 
      });
    }  
  };


export default SignUp