import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';


class CommentListItem extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }
  // ==================================================
  // Event Handlers
  // ==================================================
  handleDeleteComment(e) {
    e.preventDefault;
    this.props.deleteComment(this.props.comment);
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestPost(this.props.postId);
  }

  // ==================================================
  // Render
  // ==================================================
  renderCloseButton(user, currentUser) {
    // if (currentUser.id === user.id) return null;

    return (
      <button
        className="close-comment-button-content"
        onClick={this.handleDeleteComment}>
        <p className="close-comment-button">delete</p>
      </button>
    )
  }

  render() {
    const {comment, user, currentUser} = this.props;

    if (user === undefined) return null;

    return (
      <div className="comment-list-item-container">
        <div className="comment-list-item-content">
          <Link
            className="post-author-text"
            to={`profiles/${user.id}`}>
            {comment.author}
          </Link>
          <p className="post-comment-text">{comment.body}</p>
        </div>
        {this.renderCloseButton(user, currentUser)}
      </div>
    );
  }

};

export default CommentListItem;
