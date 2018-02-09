import React from 'react';
import {Component} from 'react';

// Components
import CommentsListViewContainer from './components/post_list/comments_list_view_container';
import AddCommentFormContainer from './components/post_list/forms/add_comment_form_container';


class PostShowView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleStopBubble = this.handleStopBubble.bind(this);
  }

  // ==================================================
  // Callbacks
  // ==================================================
  handleStopBubble(event) {
    if (!event) {
      const event = window.event;
    }

    event.cancelBubble = true;

    if (event.stopPropagation) {
      event.stopPropagation();
    }
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {post, user, onExit} = this.props;

    if (user === undefined) return null;
    if (post === undefined) return null;

    const userSrc = user && user.img_url ? user.img_url : "https://s3-us-west-2.amazonaws.com/instagraph-aa/empty-profile-picture.jpg";

    return (
      <div
        onClick={onExit}
        className="post-show-container">
        <div className="post-show-content" onClick={this.handleStopBubble}>
          <div >
            <img src={post.img_url} className="post-photo"/>
          </div>
          <div className="post-show-sidebar">
            <div className="post-show-sidebar-header">
              <img
                className="post-show-sidebar-header-thumb"
                src={userSrc}
                width={40}
                height={40}
              />
              <p>{user.username}</p>
            </div>
            <div className="post-description-container">
              <p className="post-author-text">{user.username}</p>
              <p className="post-description-text">{post.description}</p>
            </div>
            <div className="post-view-comment-form-container">
              <div className="post-view-comment-list-container">
                <CommentsListViewContainer post={post}/>
              </div>
              <AddCommentFormContainer
                className={"post-view-comment-form"}
                formId={`comment-form-${post.id}`}
                post={post}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

};

export default PostShowView;
