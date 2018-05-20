import React, { Component } from 'react';
import '../../App.css';
// import PostComment from '../../Comment/components/Comment';





class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postBody: '',
      comment: '',
    };

  // this.handleCommentInputChange = this.handleCommentChange.bind(this);
  // this.createComment = this.createComment.bind(this);
  }

  // handleCommentInputChange(e) {
  //     this.setState({
  //       newCommentBody: e.target.value
  //     });

  // }

  // createComment(){
  //   this.props.addComment(this.state.newCommentBody)
  //   this.setState({
  //     newCommentBody: ''
  //   });
  // }   
	// this.onChange=this.onChange.bind(this);
	// this.updateContent=this.updateContent.bind(this);   
	// // this.removeItem=this.removeItem.bind(this); 

 //  }

 //  onChange(e) {
 //  	this.firebase.ref(this).onUpdate(this.state.postBody);
 //    this.setState({ 
 //    	postBody: e.target.value 
 //    });
 //  }

 //  updateContent(e) {
 //  	e.preventDefault()
 //  	console.log(this.state);
 //  	this.props.onUpdatePost(this.state.postBody);
 //    this.setState({ 
 //    	postBody: "" 
 //    });
 //  }	

 //  removeItem() {
 //  	firebase.database().ref().remove(this);
 //  	this.setState({
 //  		postBody: '',
 //  	});
 //  }
	render() {
		return(
        <div className="post">
          <div className="panel-body">
	        <textarea
	         key="index" 
		       className="postBody"
		       value={this.props.postBody}
		       onChange={this.updateContent}
           />
          </div>
        </div>
        )
    }    
}

export default Post;