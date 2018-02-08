import React from 'react';
import {Component} from 'react';


class CommentListItem extends Component {

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
    const {comment} = this.props;

    return (
      <div >
        <p className="post-author-text">{comment.author}</p>
        <p className="post-comment-text">{comment.body}</p>
      </div>
    );
  }

};

export default CommentListItem;
