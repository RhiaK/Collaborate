import React, {Component} from 'react';
import Auth from '../firebase/firebase';
import ProjectModel from '../models/Project';
import Projects from '../components/Projects';
import CreateForm from '../components/CreateForm';
import '../components/App.css';

class ProjectsContainer extends Component {
	constructor(){
		super()
		this.state ={
			projects: [],
			editingProjectId: null,
        	editing: false
		};
		this.createProject = this.createProject.bind(this);
		this.deleteProject = this.deleteProject.bind(this);
		this.updateProject = this.updateProject.bind(this);
    this.editProject = this.editProject.bind(this);
	}
  componentDidMount() {
    this.fetchData();
  }
  fetchData(){
    ProjectModel.all().then((res)=> {
      this.setState ({
        projects: res.data.projects,
        project: ''
      }); 
    });
  }
	createProject(project) {
	    let newProject = {
	        body: project,
	        completed: false
	    };
	    ProjectModel.create(newProject).then((res) => {
	        let projects = this.state.projects
	        let newProjects = projects.push(res.data)
	        this.setState({newProjects})
	    });
	}
	updateProject(projectBody) {
    	var projectId = this.state.editingProjectId
    	function isUpdatedProject(project) {
        	return project._id === projectId;
    }
    	ProjectModel.update(projectId, projectBody).then((res) => {
        	let projects = this.state.projects
        	projects.find(isUpdatedProject).body = projectBody
        	this.setState({projects: projects, editingProjectId: null, editing: false})
    	});
	}
	editProject(project){
  		this.setState({
   		 	editingProjectId: project._id,
    		editing: true
  		});
	}
	deleteProject(project) {
    	ProjectModel.delete(project).then((res) => {
        	let projects = this.state.projects.filter(function(project) {
          	return project._id !== res.data._id
        	});
        	this.setState({projects})
   		});
	}
	render(){
	  return (
    	<div className='ProjectsContainer App'>
     	 <h2>Projects</h2>
      		<Projects
        		projects={this.state.projects}
        		editingProjectId={this.state.editingProjectId}
        		onEditProject={this.editProject}
        		onDeleteProject={this.deleteProject} 
        		onUpdateProject={this.updateProject} />
      		<CreateForm
       		 	createProject={this.createProject} />
    	</div>
	  )
	}
}

export default ProjectsContainer