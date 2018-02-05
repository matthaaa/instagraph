import React from 'react';
import {Component} from 'react';


class PostListItemActions extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    // TODO: Add icons to buttons.
    return(
      <div className="post-action-bar" >
        <button className="post-action-button post-like-button"></button>
        <button className="post-action-button post-comment-button"></button>
      </div>
    );
  }

};

export default PostListItemActions;
