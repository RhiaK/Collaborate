import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';



class ThreadDisplay extends Component {
constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
    

    this.state = {
      posts: [],
    }
  console.log(this.props.db);
  }

  componentDidMount() {
    this.props.db.ref().on('child_added', snapshot => {
      const myPosts = snapshot.val(); 
        this.setState({posts: [myPosts].concat(this.state.posts)});
        console.log(myPosts);
    });
  }

  addPost(newPostBody){
    const newState = Object.assign({}, this.state);
    newState.posts.push(newPostBody);
    this.props.db.ref().push().set(newPostBody);
    this.setState(newState);
  }

  addComment(newCommentBody){
    const newState = Object.assign({}, this.state);
    newState.comments.push(newCommentBody);
    this.props.db.ref().push().set(newCommentBody);
    this.setState(newState);
  }

render(){
  return (
      <div>
        <div className="up">
          {this.state.posts.map((postBody, index) => {
            return (
              <Post 
              className="up"
              key={index} 
              postBody={postBody} 
              />
            )
          })
        }
        </div>
          <div>
            <PostEditor addPost={this.addPost} />
          </div>
      </div>
  )
}
}

export default ThreadDisplay;