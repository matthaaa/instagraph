import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';

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
    this.handleFocusOnComment = this.handleFocusOnComment.bind(this);
    this.handleShowCommentForm = this.handleShowCommentForm.bind(this);
    this.handleHideCommentForm = this.handleHideCommentForm.bind(this);
    this.state = {
      like: {
        user_id: "",
        post_id: "",
      },
      commentFormIsVisible: false,
    };
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleLike(like) {
    console.log("Like!");
    this.props.addLike(like);
  }

  handleUnlike(like) {
    this.props.deleteLike(like);
  }

  handleLikeAction(e) {
    const {currentUser, post} = this.props;
    const liked = post.current_user_likes;
    e.preventDefault();


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

  handleFocusOnComment() {
    this.handleShowCommentForm()
    document.getElementById("comment-form").focus();
  }

  handleShowCommentForm() {
    this.setState({commentFormIsVisible: true})
  }

  handleHideCommentForm() {
    // TODO: Invoke this conditionally on screen size later.
    this.setState({commentFormIsVisible: false})
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestPost(this.props.post.id)
  }
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
        <p className="post-author-text">{name}</p>
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
    // TODO(matt): Make link to post show screen.
    return (
      <Link className="post-timestamp" to={"/"}>{post.time_ago.toUpperCase()}</Link>
    );
  }


  renderCommentForm(post) {
    if (this.state.commentFormIsVisible) {
      return (
        <div className="comment-form" >
          <AddCommentFormContainer post={post} />
        </div>
      );
    } else {
      return <div/>;
    }
  }

  renderPostListActions() {
    // TODO: Add icons to buttons.

    const {post} = this.props;
    const emptyHeartSrc = "https://s3-us-west-2.amazonaws.com/instagraph-aa/icon-heart.png"
    const filledHeartSrc = "https://s3-us-west-2.amazonaws.com/instagraph-aa/icon-heart-filled.png"
    const heartSrc = post.current_user_likes ? filledHeartSrc : emptyHeartSrc;

    return(
      <div className="post-action-bar" >
        <button
          onClick={this.handleLikeAction}
          className="post-action-button post-like-button">
          <img
            src={heartSrc}
            height={30}
          />
        </button>
        <button
          onClick={this.handleFocusOnComment}
          className="post-action-button post-comment-button">
          <img
            src="https://s3-us-west-2.amazonaws.com/instagraph-aa/icon-comment.png"
            height={25}
          />
        </button>
      </div>
    );
  }

  renderPostBody(likesCount, post, user, currentUser) {
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
    const {likesCount, post, user, currentUser} = this.props;

    return (
      <div className="post-list-item">
        <PostListItemHeader user={user} />
        {this.renderPhoto(post)}
        {this.renderPostBody(likesCount, post, user, currentUser)}
      </div>
    );
  }

};

export default PostListItem;
