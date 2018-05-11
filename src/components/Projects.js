import React, {Component} from 'react'
import Project from './Project'

class Projects extends Component {
  render(){
    let projects = this.props.projects.map( (project) => {
      return (
        <Project
          key={project._id}
          project={project}
          editingProjectId={this.props.editingProjectId}
          onEditProject={this.props.onEditProject}
          onDeleteProject={this.props.onDeleteProject}
          onUpdateProject={this.props.onUpdateProject}
        />
      )
    })
    return(
      <div className="projects">
        {projects}
      </div>
    )
  }
}

export default Projects