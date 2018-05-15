import React, { Component } from 'react';
import Post from '../../Post/components/Post';
import PostEditor from '../../PostEditor/components/PostEditor';
import firebase from 'firebase';



class ThreadDisplay extends Component {
constructor(props) {
    super(props);

    this.addPost = this.addPost.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateContent = this.updateContent.bind(this);
    this.removeItem = this.removeItem.bind(this);
    

    this.state = {
      posts: [],
    }
  console.log(this.props.db);
  }


  onChange(e) {
    this.firebase.ref(this).onUpdate(this.state.postBody);
    this.setState({ 
      posts: e.target.value 
    });
  }

  updateContent(e) {
    e.preventDefault()
    console.log(this.state);
    this.props.onUpdatePost(this.state.postBody);
    this.setState({ 
      posts: "" 
    });
  } 

  removeItem(index) {
    firebase.database().ref().remove(this.props.index);
    this.setState({
      posts: '',
    });
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

render(){
  return (
      <div>
          {this.state.posts.map((postBody, index) => {
            return (
              <div key={index}>
              <Post key={index} postBody={postBody} />
              <button type="submit" className="btn post-update-button" 
              onClick={this.onUpdate}>Update</button>
              <button type="submit" className="btn post-delete-button" 
              onClick={this.removeItem}>Delete</button>
              </div>

            )
          })
        }
        <PostEditor addPost={this.addPost} />
      </div>
  )
}
}

export default ThreadDisplay;
