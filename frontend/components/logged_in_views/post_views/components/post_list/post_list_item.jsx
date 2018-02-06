import React from 'react';
import {Component} from 'react';

// Components
import PostListItemHeader from './components/post_list_item_header';
import PostListItemActionContainer from './components/post_list_item_action_container';


class PostListItem extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  renderPhoto(post) {
    const url = post.img_url;

    return(
      <div className="post-photo" >
        <img
          src={url}
          width={600}
          align="middle"
        />
      </div>
    );
  }

  renderDescription(post) {
    const description = post.description;
    const name = post.user.username;

    return(
      <div className="post-description-container" >
        <p className="post-item-author-text">{name}</p>
        <p className="post-description-text">{description}</p>
      </div>
    );
  }

  renderTimestamp(post) {
    return (
      <a>{post.time_ago}</a>
    );
  }


  renderCommentForm() {
    return(
      <div className="comment-form" ></div>
    );
  }

  renderPostBody(post) {
    const likes = post.likes;
    const likesCount = likes.length;
    const likesText = likes.length === 1 ? "like" : "likes";

    return (
      <div className="post-body">
        <PostListItemActionContainer post={post} />
        <div className="post-body-likes">
          <p className="post-body-likes-count">{likesCount}</p>
          <p className="post-body-likes-text">{likesText}</p>
        </div>
        {this.renderDescription(post)}
        {this.renderTimestamp(post)}
        {this.renderCommentForm()}
      </div>
    )
  }

  render() {
    const {post} = this.props;
    const user = post.user;

    return (
      <div className="post-list-item">
        <PostListItemHeader user={user} />
        {this.renderPhoto(post)}
        {this.renderPostBody(post)}
      </div>
    );
  }

};

export default PostListItem;
