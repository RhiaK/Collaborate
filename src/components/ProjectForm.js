import React, {Component} from 'react'

class ProjectForm extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({
      project: event.target.value
    });
  }
  onSubmit(event){
    event.preventDefault();
    var project = this.state.project;
    this.props.onUpdateProject(project);
    this.setState({
      project: { 
        name: "",
        description: "",
        requests: ""
      }  
    });
  }
  render(){
    return (
      <div className='projectForm'>
        <form onSubmit={ this.onSubmit }>
          <input
            autoFocus={this.props.autoFocus}
            onChange={ this.onChange }
            placeholder='Write a todo here ...'
            type='text'
            value={(this.state && this.state.project)} />
          <button type='submit'>{this.props.buttonName}</button>
        </form>
      </div>
    )
  }
}

export default ProjectForm