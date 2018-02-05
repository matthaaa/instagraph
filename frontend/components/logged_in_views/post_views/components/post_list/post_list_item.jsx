import React from 'react';
import {Component} from 'react';

// Components
import PostListItemHeader from './components/post_list_item_header';
import PostListItemActions from './components/post_list_item_actions';


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

    return(
      <div className="post-description-container" >
        <p className="post-header-author-text">Oski</p>
        <p className="post-description-text">{description}</p>
      </div>
    );
  }

  renderCommentForm() {
    return(
      <div className="comment-form" ></div>
    );
  }

  renderPostBody(post) {
    return (
      <div className="post-body">
        <PostListItemActions post={post} />
        {this.renderDescription(post)}
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
