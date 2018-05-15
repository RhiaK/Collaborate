import React, { Component } from 'react';
import '../../App.css';
import ThreadDisplay from '../../ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase';
// import PostComment from '../../Comment/components/Comment';





class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postBody: '',
    };
	this.onChange=this.onChange.bind(this);
	this.updateContent=this.updateContent.bind(this);   
	// this.removeItem=this.removeItem.bind(this); 

  }

  onChange(e) {
  	this.firebase.ref(this).onUpdate(this.state.postBody);
    this.setState({ 
    	postBody: e.target.value 
    });
  }

  updateContent(e) {
  	e.preventDefault()
  	console.log(this.state);
  	this.props.onUpdatePost(this.state.postBody);
    this.setState({ 
    	postBody: "" 
    });
  }	

  removeItem() {
  	firebase.database().ref().remove(this);
  	this.setState({
  		postBody: '',
  	});
  }
	render() {
		return(
        <div className="post">
          <div className="panel-body">
	        <input 
	         type="text"
	         key="index" 
		     className="postBody"
		     value={this.props.postBody}
		     onChange={ this.updateContent}
		    /> 
            <button type="submit" className="btn post-update-button" 
            onClick={this.onUpdate}>Update</button>
            <button type="submit" className="btn post-delete-button" 
            onClick={this.removeItem}>Delete</button>
          </div>
        </div>
        )
    }    
}

export default Post;