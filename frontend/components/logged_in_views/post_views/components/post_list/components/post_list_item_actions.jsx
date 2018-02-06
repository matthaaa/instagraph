import React from 'react';
import {Component} from 'react';


class PostListItemActions extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props)
    this.handleLike = this.handleLike.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Event Handlers
  // ==================================================
  handleLike() {
    // TODO: Like action goes here
    console.log("Like!");
  }

  handleComment() {
    // TODO: Comment action goes here
    console.log("Comment!");
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    // TODO: Add icons to buttons.
    return(
      <div className="post-action-bar" >
        <button
          onClick={this.handleLike}
          className="post-action-button post-like-button">
          <img
            src="https://s3-us-west-2.amazonaws.com/instagraph-aa/icon-heart.png"
          />
        </button>
        <button
          onClick={this.handleComment}
          className="post-action-button post-comment-button">
          <img
            src="https://s3-us-west-2.amazonaws.com/instagraph-aa/icon-comment.png"
          />
        </button>
      </div>
    );
  }

};

export default PostListItemActions;
