import React from 'react';
import {Component} from 'react';

// Components
import CommentListItem from './comment_list_item';

class CommentsListView extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderCommentListItem(comment) {
    if (comment) {
      return (
        <CommentListItem key={comment.id} comment={comment} />
      );
    } else {
      return <div />;
    }
  }

  render() {
    const {comments} = this.props;

    return comments.map(comment => (
      this.renderCommentListItem(comment)
    ));
  }

};

export default CommentsListView;
