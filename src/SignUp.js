import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import * as routes from './constants/routes';
import { auth } from './firebase';
import './App.css';


const SignUpPage = ({ history }) =>
	<div>
	  <h1 className="App">Sign Up</h1>
	  <SignUpForm history={ history }></SignUpForm> 	
	  <img className="img1" alt="handshake" src="./favicon.ico"></img>
	</div>

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
  		super(props);

  	this.state = { ...INITIAL_STATE };

  	this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    	this.setState(prevState => ({
      	dropdownOpen: !prevState.dropdownOpen
    	}));
  }

  onSubmit = (e) => {
	    const {
	      username,
	      email,
	      passwordOne,
	    } = this.state;

	    const {
	      history,
	    } = this.props;

	    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
	      .then(authUser => {
	        this.setState(() => ({ ...INITIAL_STATE }));
	        history.push(routes.HOME);
	      })
	      .catch(error => {
	        this.setState(byPropKey('error', error));
	      });

	    e.preventDefault();
  }

  render() {
  		const {
	      username,
	      email,
	      passwordOne,
	      passwordTwo,
	      error,
	    } = this.state;

	    const isInvalid =
	      passwordOne !== passwordTwo ||
	      passwordOne === '' ||
	      email === '' ||
	      username === '';


  		return (
  			<div>
			  	<form className="App down" onSubmit={this.onSubmit}>
			  		<input
					    value={username}
					    onChange={event => this.setState(byPropKey('username', event.target.value))}
					    type="text"
				      	placeholder="Full Name"
					/>
					<br></br>
					<input
					    value={email}
					    onChange={event => this.setState(byPropKey('email', event.target.value))}
					    type="text"
					    placeholder="Email Address"
					/>
					<br></br>
					<input
					    value={passwordOne}
					    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
					    type="password"
					    placeholder="Password"
				    />
					<br></br>
					<input
					    value={passwordTwo}
					    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
					    type="password"
					    placeholder="Confirm Password"
					/>
			        <br></br>
					<button>
					  	Sign Up
					</button>
					   	{ error && <p>{error.message}</p> }	
			  	</form>
			</div> 			
  		);
  	}
  }

const SignUpLink = () =>
	<p className="App">
		<strong>Don't have an account?</strong>
		{' '}
		<Link to={routes.SIGN_UP}>Sign Up</Link>
	</p>

export default withRouter(SignUpPage);
export {
	SignUpForm,
	SignUpLink
}
