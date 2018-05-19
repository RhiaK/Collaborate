import React, { Component } from 'react';
import '../../App.css';

class PostEditor extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newPostBody: '',
		};

	this.handlePostEditorInputChange = this.handlePostEditorInputChange.bind(this);
	this.createPost = this.createPost.bind(this);
  	}

  	handlePostEditorInputChange(e) {
    	this.setState({
     		newPostBody: e.target.value
    	});

	}

	handlePostNameInputChange(e) {
    	this.setState({
     		newNameBody: e.target.value
    	});

	}

	createPost(){
		this.props.addPost(this.state.newPostBody);
		this.setState({
			newPostName: '',
			newPostBody: '',
		});
	}

	render() {
		return (
        <div className="panel panel-default post">
          <div className="panel-body">
            <input type="text"
            placeholder="Name your project"
            className="post-name-input" 
            value={this.state.newPostName} 
            onChange={this.handlePostNameInputChange} />
            <input type="text" 
            placeholder="Describe your project"
            className="form-control post-editor-input" 
            value={this.state.newPostBody} 
            onChange={this.handlePostEditorInputChange} />
            <button type="submit" className="btn btn-success post-editor-button" 
            onClick={this.createPost}>Create a New Project!</button>
          </div>
        </div>	
        )
	}
}

export default PostEditor;