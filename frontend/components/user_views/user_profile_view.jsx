import React from 'react';
import {Component} from 'react';

// Components
import MainHeaderContainer from '../generic/main_header_container';
import CustomButtom from '../generic/buttons/custom_button';


class UserProfileView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.handleFollowAction = this.handleFollowAction.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
    this.state = {
      follow: {
        follower_id: "",
        followed_id: "",
      },
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
  handleFollow(follow) {
    this.props.addFollow(follow)
  }

  handleUnfollow(follow) {
    this.props.deleteFollow(follow)
  }

  handleFollowAction(e) {
    const {currentUserFollows, currentUser, user} = this.props;
    console.log(this.props);

    e.preventDefault();

    this.setState({
      follow: Object.assign(this.state.follow, {
        follower_id: currentUser.id,
        followed_id: user.id,
      })
    });

    console.log(this.state.follow);
    console.log(currentUserFollows);

    if (currentUserFollows) {
      this.handleUnfollow(this.state.follow)
    } else {
      this.handleFollow(this.state.follow)
    }
  }

  // ==================================================
  // Render
  // ==================================================
  renderUserHeader() {
    const {
      currentUser,
      currentUserFollows,
      followerCount,
      followingCount,
      user,
    } = this.props;

    const username = user ? user.username : "";
    const src = user ? user.img_url : "";
    const followText = currentUserFollows ? "Unfollow" : "Follow";

    return (
      <div className="main-profile-user-header">
        <img
          src={src}
          width={120}
          height={120}
          align="middle"
          className="main-profile-header-user-picture"
        />
        <div className="main-profile-user-header-contents">
          <div>{username}</div>

          <div>You follow:</div>
          <div>{currentUserFollows ? "Yeah" : "Naw"}</div>

          <div>Followers:</div>
          <div>{followerCount}</div>

          <div>Following:</div>
          <div>{followingCount}</div>
          <CustomButtom
            className="profile-follow-button"
            onPress={this.handleFollowAction}
            text={followText}
            />
        </div>
      </div>
    );
  }

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
    return (
      <div className="logged-in-view">
        <MainHeaderContainer />
        {this.renderUserHeader()}
        <div className="posts-grid-view">
          {this.renderPostsGrid()}
        </div>
      </div>
    );
  }

};

export default UserProfileView;
