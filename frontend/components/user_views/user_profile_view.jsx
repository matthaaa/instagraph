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

  renderPostsGrid(user) {
    const {posts} = this.props;

    return posts.reverse().map(post => (
      this.renderPostGridItem(user, post)
    ))
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

    return (
      <div className="logged-in-view profile-view">
        {this.renderPostDisplay()}
        <MainHeaderContainer uploadHidden />
        <UserProfileHeaderContainer
          currentUser={this.props.currentUser}
          />
        <div className="posts-grid-view">
          {this.renderPostsGrid(user)}
        </div>
      </div>
    );
  }

};

export default UserProfileView;
