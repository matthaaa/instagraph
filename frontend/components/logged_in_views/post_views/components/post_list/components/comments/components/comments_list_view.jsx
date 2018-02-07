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
    const {hasComments, comments} = this.props;
    console.log(comments);

    if (hasComments) {
      return comments.map(comment => (
        this.renderCommentListItem(comment)
      ));
    } else {
      return <div/>;
    }
  }

};

export default CommentsListView;
