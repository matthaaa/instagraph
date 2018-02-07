import React from 'react';
import {Component} from 'react';

// Components
import PostListItemHeader from './components/post_list_item_header';
import PostListItemActionContainer from './components/post_list_item_action_container';
import AddCommentFormContainer from './components/comments/forms/add_comment_form_container';
import CommentListViewContainer from './components/comments/components/comments_list_view_container';


class PostListItem extends Component {

  // ==================================================
  // Initialize
  // ==================================================

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
    const description = post.description;
    const name = user.username;

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

  renderPostBody(post, user) {
    const likesCount = post.like_ids.length;
    const likesText = likesCount === 1 ? "like" : "likes";
    // debugger
    return (
      <div className="post-body">
        <PostListItemActionContainer post={post} />
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
    const {post, user} = this.props;

    return (
      <div className="post-list-item">
        <PostListItemHeader user={user} />
        {this.renderPhoto(post)}
        {this.renderPostBody(post, user)}
      </div>
    );
  }

};

export default PostListItem;
