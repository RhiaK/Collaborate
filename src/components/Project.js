import React, {Component} from 'react'
import ProjectForm from './ProjectForm'

class Project extends Component {
  constructor() {
    super();
    this.editClickedProject = this.editClickedProject.bind(this);
  }
  deleteClickedProject() {
    this.deleteClickedProject = this.deleteClickedProject.bind(this);
  }
  deleteClickedProject() {
    this.props.onDeleteProject(this.props.project);
  }
  editClickedProject() {
    this.props.onEditProject(this.props.project)
  }
  render(){
    return(
      <p data-project-index={this.props.project.id}>
        <span onClick={ this.editClickedProject }>
          {this.props.project.body}
        </span>
        { this.props.editingProjectId === this.props.project._id ? 
        	<ProjectForm
  				autoFocus={true}
  				buttonName="Update Project"
  				onUpdateProject={this.props.onUpdateProject} /> : '' }
        <span
          className='deleteButton'
          onClick={ this.deleteClickedProject }>
            (X)
        </span>
      </p>
    )
  }
}


export default Project