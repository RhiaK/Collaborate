// import React, { Component } from 'react';
// import Post from '../../Post/components/Post';
// import ThreadDisplay from '../../ThreadDisplay/components/ThreadDisplay';
// let Comment='';



// class PostComment extends Component {
//   constructor() {
//     super();
//     this.state = {
//       post: {
//         comments: []
//       }
//     };
//     // this.getCurrentPostId = this.getCurrentPostId.bind(this);
//     this.createComment = this.createComment.bind(this);
//   }

//   // getCurrentPostId() {
//   //   return this.props.location.pathname.split('/')[2];
//   // }

//   componentWillMount() {
//     let postId = this.getCurrentPostId();
//     this.props.db(`/api/posts/${ postId }`).then(myPost => {
//       this.setState({ post: myPost })
//     });
//   }

//   createComment(comment) {
//     let postId = this.getCurrentPostId();
//     this.props.db(`/api/posts/${ postId }/comments`, 'POST', JSON.stringify(comment)).then(res => {
//       this.props.db(`/api/posts/${ postId }`).then(updatedPost => {
//         this.setState({ post: updatedPost });
//       })
//     })
//   }

  
//   render() {
//     return (
//       <div className="Post">
//         <div className="Post-content">
//           <input { ...this.state.post } />
//           <input type="text"
//            onSubmit={ this.createComment } />
//           { this.state.post.comments.map(comment => {
//             return <Comment
//               key = { comment._id }
//               { ...comment } />
//           }) }
//         </div>
//       </div>
//     );
//   }
// }

// export default PostComment;