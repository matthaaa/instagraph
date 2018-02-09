import React from 'react';
import {Component} from 'react';

// Components
import CommentsListItemContainer from './comment_list_item_container';

class CommentsListView extends Component {

  // ==================================================
  // Render
  // ==================================================
  renderCommentListItem(comment) {
    if (comment) {
      return (
        <CommentsListItemContainer key={comment.id} comment={comment} />
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
