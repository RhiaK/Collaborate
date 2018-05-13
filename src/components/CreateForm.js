import React, { Component, props } from 'react';
import firebase from '../firebase/firebase'
const firebaseRef = firebase.database().ref;
const cors = require('cors')({origin: true});

class CreateForm extends Component {
  constructor(){
    super()
    this.state = {
      project: {
      name: '',
      description: '',
      requests: ''
      }
    };


    this.onNameChange = this.onNameChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onReqChange = this.onReqChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

   onNameChange(event){
      this.setState({
        name: event.target.value
      });
    }
    onDescChange(event){
      this.setState({
        description: event.target.value
      });
    }
    onReqChange(event){
      this.setState({
        requests: event.target.value
      });
    }
    onFormSubmit(event){
      event.preventDefault();
      let project = {
        name: this.state.name,
        description: this.state.desc,
        requests: this.state.req
      };
      firebaseRef.push().set(project);
      this.setState({
        name: "",
        description: "",
        requests: ""
      });
    	// this.props.createProject(project);	
    	// this.setState({
    	// 	project: {
    	// 	name: "",
    	// 	description: "",
    	// 	requests: ""
    	// 	}
   		// });
    }

  render() {
    return (
      <div className='createForm projectForm App'>
        <h2>Create a new project</h2>
        <form onSubmit={this.onFormSubmit}>
          <input
            onChange={this.onNameChange}
            placeholder='Enter the name of your new project'
            type='text'
            value={this.state.name} 
           />
           <input
            onChange={this.onDescChange}
            placeholder='Please provide a description'
            type='text'
            value={this.state.desc} 
           />
           <input
            onChange={this.onReqChange}
            placeholder='Enter any specific requests for help here'
            type='text'
            value={this.state.req} 
           />
           <br></br>
          <button type='submit'>Create!</button>
        </form>
      </div>
    )
  }
}
export default CreateForm;