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
      <div className="post-author-header" >
        <p className="post-header-author-text">Oski</p>
      </div>
    );
  }

  renderPhoto(post) {
    const url = post.img_url;

    return(
      <div className="post-photo" >
        <img
          src={url}
          width={600}
          align="middle"
        />
      </div>
    );
  }

  renderActionBar() {
    // TODO: Add icons to buttons.
    return(
      <div className="post-action-bar" >
        <button className="post-button post-like-button"></button>
        <button className="post-comment-button"></button>
      </div>
    );
  }

  renderDescription(post) {
    const description = post.description;

    return(
      <div className="post-description-container" >
        <p className="post-header-author-text">Oski</p>
        <p className="post-description-text">{description}</p>
      </div>
    );
  }

  renderCommentForm() {
    return(
      <div className="comment-form" ></div>
    );
  }

  renderPostBody(post) {
    return (
      <div className="post-body">
        {this.renderActionBar()}
        {this.renderDescription(post)}
        {this.renderCommentForm()}
      </div>
    )
  }

  render() {
    // TODO: Test Post.
    const post = {
      id: 1,
      description: "Miss this place.",
      author_id: 2,
      img_url: "https://s3-us-west-2.amazonaws.com/instagraph-aa/IMG_8769.jpg",
    }

    return (
      <div className="post-list-item">
        {this.renderHeader()}
        {this.renderPhoto(post)}
        {this.renderPostBody(post)}
      </div>
    );
  }

};

export default PostListItem;
