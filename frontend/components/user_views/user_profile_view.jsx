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
      <div className="post-grid-item-content">
        <img
          src={src}
          align="middle"
          className="post-grid-item"
        />
      </div>
    );
  }

  renderPostGridRow(posts) {

  }

  renderPostsGrid() {
    const {posts} = this.props;

    return posts.map(post => (
      this.renderPostGridItem(post)
    ))
  }

  render() {
    if (this.props.user === undefined) return null;
    return (
      <div className="logged-in-view profile-view">
        <MainHeaderContainer />
        <div className="post-grid-body">
          <UserProfileHeaderContainer
            currentUser={this.props.currentUser}
            />
          <div className="posts-grid-view">
            {this.renderPostsGrid()}
          </div>
        </div>
      </div>
    );
  }

};

export default UserProfileView;
