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
        <button className="post-button post-like-button"></button>
        <button className="post-comment-button"></button>
      </div>
    );
  }

};

export default PostListItemActions;
