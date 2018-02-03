import React from 'react';
import {Component} from 'react';


class PostListItem extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  renderHeader() {
    return(
      <div className="post-author-header" ></div>
    );
  }

  renderPhoto() {
    return(
      <div className="post-photo" ></div>
    );
  }

  renderActionBar() {
    return(
      <div className="post-action-bar" ></div>
    );
  }

  renderDescription() {
    return(
      <div className="post-description" ></div>
    );
  }

  renderCommentForm() {
    return(
      <div className="comment-form" ></div>
    );
  }

  renderPostBody() {
    return (
      <div className="post-body">
        {this.renderActionBar()}
        {this.renderDescription()}
        {this.renderCommentForm()}
      </div>
    )
  }

  render() {
    const {
      post,
    } = this.props

    return (
      <div className="post-list-item">
        {this.renderHeader()}
        {this.renderPhoto()}
        {this.renderPostBody()}
      </div>
    );
  }

};

export default PostListItem;
