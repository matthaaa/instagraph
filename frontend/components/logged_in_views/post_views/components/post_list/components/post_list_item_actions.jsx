import React from 'react';
import {Component} from 'react';


class PostListItemActions extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props)
    this.handleLikeAction = this.handleLikeAction.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.state = {
      like: {
        user_id: "",
        post_id: "",
      }
    };
  }

  // ==================================================
  // Callbacks
  // ==================================================
  componentWillUpdate(newProps) {
    console.log(this.props);
    if (this.props.post.like_ids.length !== newProps.post.like_ids.length) {
      this.props.requestPost(newProps.post.id);
      this.props.requestUser(newProps.currentUser);
    }
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleLike(like) {
    this.props.addLike(like);
  }

  handleUnlike(like) {
    this.props.deleteLike(like);
  }

  handleLikeAction(e) {
    // TODO: Like action goes here
    console.log("Like!");
    e.preventDefault();

    console.log(this.props.currentUserLike);
    const {currentUser, post, liked} = this.props;

    this.setState({
      like: Object.assign(this.state.like, {
        user_id: currentUser.id,
        post_id: post.id,
      })
    });


    if (liked) {
      this.handleUnlike(this.props.currentUserLike);
    } else {
      this.handleLike(this.state.like);
    }
  }

  handleComment() {
    // TODO: Comment action goes here
    console.log("Comment!");
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    // TODO: Add icons to buttons.
    return(
      <div className="post-action-bar" >
        <button
          onClick={this.handleLikeAction}
          className="post-action-button post-like-button">
          {this.props.liked ? "Liked!" : "Not Liked!"}
        </button>
        <button
          onClick={this.handleComment}
          className="post-action-button post-comment-button">
          <img
            src="https://s3-us-west-2.amazonaws.com/instagraph-aa/icon-comment.png"
            height={25}
          />
        </button>
      </div>
    );
  }
};

export default PostListItemActions;

// <img
//   src="https://s3-us-west-2.amazonaws.com/instagraph-aa/icon-heart.png"
//   height={30}
// />
