
import React from 'react';
import '../../App.css';


const Post= (props) => (
        <div className="post">
          <div className="panel-body">
            { props.postBody }
          </div>
        </div>
)

export default Post;