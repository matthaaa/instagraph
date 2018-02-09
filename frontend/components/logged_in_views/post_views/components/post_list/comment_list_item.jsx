import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CommentListItem extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {comment, user} = this.props;

    return (
      <div className="comment-list-item-container">
        <Link
          className="post-author-text"
          to={`profiles/${user.id}`}>
          {comment.author}
        </Link>
        <p className="post-comment-text">{comment.body}</p>
      </div>
    );
  }

};

export default CommentListItem;
