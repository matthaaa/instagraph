import React from 'react';
import {Component} from 'react';


class PostListItemHeader extends Component {

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
    const {user} = this.props;

    return(
      <div className="post-author-header" >
        <p className="post-header-author-text">{user.username}</p>
      </div>
    );
  }

};

export default PostListItemHeader;
