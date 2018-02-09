import React from 'react';
import {Component} from 'react';

// Components
import MainHeaderContainer from '../generic/main_header_container';
import CustomButtom from '../generic/buttons/custom_button';
import UserProfileHeaderContainer from './components/user_profile_header_container';


class UserProfileView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestUsers();
    this.props.requestPosts();
  }

  // ==================================================
  // Event Handlers
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  renderPostGridItem(post) {
    const src = post ? post.img_url : "";
    return (
      <div className="post-grid-item">
        <img
          src={src}
          width={295}
          height={295}
          align="middle"
          className="post-grid-item"
        />
      </div>
    );
  }

  renderPostGridRow(posts) {

  }

  renderPostsGrid() {
    const {postIds} = this.props;

    return postIds.map(postId => (
      this.renderPostGridItem(postId)
    ))
  }

  render() {
    if (this.props.user === undefined) return null;
    return (
      <div className="logged-in-view">
        <MainHeaderContainer />
        <UserProfileHeaderContainer
          user={this.props.user}
          currentUser={this.props.currentUser}
        />
        <div className="posts-grid-view">
          {this.renderPostsGrid()}
        </div>
      </div>
    );
  }

};

export default UserProfileView;
