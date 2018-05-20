import React, {Component} from 'react'
import firebase from '../firebase/firebase';
import axios from 'axios';
import './App.css';
const firebaseRef = firebase.database().ref;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      project: {
       data: []
      },
      newName:"",
      newDesc:"",
      newReq: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onReqChange = this.onReqChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.axiosCallback = this.axiosCallback.bind(this);
  }
  componentDidMount(){
    axios.get("https://collaborate-now.firebaseio.com").then((results) => {
      this.setState({
        project: results
      });
    });
  }

//--------------------------

  axiosCallback(results) {
    let newData = this.state.project.newData
    firebaseRef.push().set(newData);
    this.setState({
      newName: "",
      newDesc: "",
      newReq: "",
      project: {
        data: newData
      }
    });
  }
     // let project = {
     //    name: this.state.name,
     //    description: this.state.desc,
     //    requests: this.state.req
     //  };
     //  firebaseRef.push().set(project);
     //  this.setState({
     //    name: "",
     //    description: "",
     //    requests: ""
     //  });
  // onChange(event) {
  //   this.setState({
  //     project: event.target.value
  //   });
  // }

  onFormSubmit(event){
    event.preventDefault();
    var newProject = {
      name: this.state.newName,
      desc: this.state.newDesc,
      req: this.state.newReq
    };
    axios.post("https://collaborate-now.firebaseio.com", newProject).then(this.axiosCallback)
  }

   onNameChange(event){
      this.setState({
        name: event.target.value,
        desc: this.state.desc,
        req: this.state.req
      });
    }
    onDescChange(event){
      this.setState({
        name: this.state.name,
        desc: event.target.value,
        req: this.state.req
      });
    }
    onReqChange(event){
      this.setState({
        name: this.state.name,
        desc: this.state.desc,
        req: event.target.value
      });
    }
//--------------------------



  render(){
    let listOfProjects = this.state.project.data.map((projectObject, index) => {
      return 
      <li className='projectObject' key= {index}>
        <div className="projectInfo">
          <div
            name={projectObject.name}
            desc={projectObject.desc}
            req={projectObject.req}
          />
        </div> 
      </li>   
    })


    return (
      <div>
        <div className='projectForm App'>
          <h3>Current Projects</h3>
          <ul> {listOfProjects} </ul>
        </div>
        <hr/>  
        <h3 className="App">Add a New Project</h3>
         <form onSubmit={this.onFormSubmit} className="App">
          <input
            onChange={this.onNameChange}
            placeholder='Enter the name of your new project'
            type='text'
            value={this.state.newName} 
           />
           <input
            onChange={this.onDescChange}
            placeholder='Please provide a description'
            type='text'
            value={this.state.newDesc} 
           />
           <input
            onChange={this.onReqChange}
            placeholder='Enter any specific requests for help here'
            type='text'
            value={this.state.newReq} 
           />
           <br></br>
          <button type='submit'>Create!</button>
        </form>
      </div>
    )
  }
}

export default Projects