import React from 'react';
import {Component} from 'react';

// Components
import PostListItemHeader from './components/post_list_item_header';
import AddCommentFormContainer from './components/comments/forms/add_comment_form_container';
import CommentListViewContainer from './components/comments/components/comments_list_view_container';


class PostListItem extends Component {

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
      this.handleUnlike(this.state.like);
    } else {
      this.handleLike(this.state.like);
    }
  }

  handleComment() {
    // TODO: Comment action goes here
    console.log("Comment!");
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestPost(this.props.post.id)
  }

  // componentWillUpdate(newProps) {
  //   console.log(this.props);
  //   if (this.props.post.like_ids.length !== newProps.post.like_ids.length) {
  //     this.props.requestPost(newProps.post.id);
  //     this.props.requestUser(newProps.currentUser);
  //   }
  // }

  // ==================================================
  // Render
  // ==================================================
  renderPhoto(post) {
    const url = post.img_url;

    return (
      <div className="post-photo" >
        <img
          src={url}
          width={600}
          align="middle"
        />
      </div>
    );
  }

  renderDescription(post, user) {
    const description = post ? post.description : "";
    const name = user ? user.username : "";

    return (
      <div className="post-description-container" >
        <p className="post-item-author-text">{name}</p>
        <p className="post-description-text">{description}</p>
      </div>
    );
  }

  renderComments(post) {
    return (
      <CommentListViewContainer
        post={post}
      />
    );
  }

  renderTimestamp(post) {
    return (
      <a>{post.time_ago}</a>
    );
  }


  renderCommentForm(post) {
    return (
      <div className="comment-form" >
        <AddCommentFormContainer post={post} />
      </div>
    );
  }

  renderPostListActions() {
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

  renderPostBody(post, user, currentUser) {
    const likesCount = post ? post.like_ids.length : 0;
    const likesText = likesCount === 1 ? "like" : "likes";

    return (
      <div className="post-body">
        {this.renderPostListActions()}
        <div className="post-body-likes">
          <p className="post-body-likes-count">{likesCount}</p>
          <p className="post-body-likes-text">{likesText}</p>
        </div>
        {this.renderDescription(post, user)}
        {this.renderComments(post)}
        {this.renderTimestamp(post)}
        {this.renderCommentForm(post)}
      </div>
    )
  }

  render() {
    const {post, user, currentUser} = this.props;

    return (
      <div className="post-list-item">
        <PostListItemHeader user={user} />
        {this.renderPhoto(post)}
        {this.renderPostBody(post, user, currentUser)}
      </div>
    );
  }

};

export default PostListItem;
