import React from 'react';
import {Component} from 'react';

// Components
import CommentListItem from './comment_list_item';

class CommentsListView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  renderCommentListItem(comment) {
    return (
      <CommentListItem key={comment.id} comment={comment} />
    );
  }

  render() {
    const {comments} = this.props;

    return comments.map(comment => (
      this.renderCommentListItem(comment)
    ));
  }

};

export default CommentsListView;
