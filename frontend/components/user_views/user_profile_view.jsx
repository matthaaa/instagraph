import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProtectedRoute} from '../../util/route_util';

// Components
import PostShowContainer from '../logged_in_views/post_views/post_show_container';
import MainHeaderContainer from '../generic/main_header_container';
import CustomButtom from '../generic/buttons/custom_button';
import UserProfileHeaderContainer from './components/user_profile_header_container';


class UserProfileView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleTogglePost = this.handleTogglePost.bind(this);
    this.state = {
      postIsVisible: false,
      postId: null,
    }
  }
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
  handleTogglePost(postId=null) {
    this.setState({postId});
    this.setState({postIsVisible: !this.state.postIsVisible});
  }

  // ==================================================
  // Render
  // ==================================================
  renderPostGridItem(user, post) {
    const src = post ? post.img_url : "";
    const postId = post ? post.id : "";
    const userId = user ? user.id : "";

    if (post === undefined || user === undefined) return null;

    return (
      <button onClick={() => this.handleTogglePost(postId)}>
        <div key={postId} className="post-grid-item-content">
          <img
            src={src}
            align="middle"
            className="post-grid-item"
            />
        </div>
      </button>
    );
  }

  renderPostsSection(user) {
    if (user.post_ids.length > 0) {
      return (
        <div className="posts-grid-view">
          {this.renderPostsGrid(user)};
        </div>
      )
    } else {
      return this.renderEmptyPostsSection()
    }
  }

  renderPostsGrid(user) {
    const {posts} = this.props;

    return posts.reverse().map(post => (
      this.renderPostGridItem(user, post)
    ))
  }

  renderEmptyPostsSection() {
      return (
        <div className="post-grid-empty-view">
          <div className="empty-view-text">
            <p>No posts yet!</p>
            <p>Upload a photo to get started</p>
          </div>
        </div>
      )
  }

  renderPostDisplay() {
    if (!this.state.postIsVisible) return null;

    return (
      <PostShowContainer
        postId={this.state.postId}
        onExit={this.handleTogglePost}
      />
    )
  }

  render() {
    const {user} = this.props;

    if (user === undefined) return null;
    console.log(this.props.currentUser);

    return (
      <div className="logged-in-view profile-view">
        <MainHeaderContainer />
        {this.renderPostDisplay()}
        <UserProfileHeaderContainer
          currentUser={this.props.currentUser}
        />
        {this.renderPostsSection(user)}
      </div>
    );
  }

};

export default UserProfileView;
