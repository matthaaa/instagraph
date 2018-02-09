import React from 'react';
import {Component} from 'react';

// Components
import CustomButtom from '../../generic/buttons/custom_button';

class UserProfileHeader extends Component {

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
    // this.props.requestUser(this.props.user);
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleFollow(follow) {
    this.props.addFollow(follow)
  }

  handleUnfollow(follow) {
    this.props.deleteFollow(follow)
    // this.props.requestUser(this.props.user);
  }

  handleFollowAction(e) {
    const {currentUserFollows, currentUser, user} = this.props;

    e.preventDefault();

    this.setState({
      follow: Object.assign(this.state.follow, {
        follower_id: currentUser.id,
        followed_id: user.id,
      })
    });

    if (currentUserFollows) {
      this.handleUnfollow(this.state.follow)
    } else {
      this.handleFollow(this.state.follow)
    }
  }

  // ==================================================
  // Render
  // ==================================================
  renderNameRow(currentUserFollows, user) {
    const username = user.username;
    const followText = currentUserFollows ? "Unfollow" : "Follow";

    return (
      <div className="main-profile-user-header-name-row">
        <div>{username}</div>
        <CustomButtom
          className="profile-follow-button"
          onPress={this.handleFollowAction}
          text={followText}
          />
      </div>
    );
  }

  renderStatsRow(user) {
    const {
      followerCount,
      followingCount,
      postCount,
    } = this.props;

    return (
      <div className="main-profile-user-header-stats-row">
        <div>{postCount}</div>
        <div>Posts</div>
        <div>{followerCount}</div>
        <div>Followers:</div>
        <div>{followingCount}</div>
        <div>Following:</div>
      </div>
    );
  }

  renderBio(user) {
    return (
      <div className="main-profile-user-bio"/>
    );
  }

  render() {
    const {
      currentUser,
      currentUserFollows,
      followerCount,
      followingCount,
      user,
      postCount,
    } = this.props;

    if (user === undefined) return null;

    const src = user.img_url;

    return (
      <div className="main-profile-user-header">
        <img
          src={src}
          width={150}
          height={150}
          align="middle"
          className="main-profile-header-user-picture"
        />
        <div className="main-profile-user-header-contents">
          {this.renderNameRow(currentUserFollows, user)}
          {this.renderStatsRow(user, postCount)}
          {this.renderBio(user)}
        </div>
      </div>
    );
  }

};

export default UserProfileHeader;
