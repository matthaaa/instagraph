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
  renderFollowButton(currentUserFollows) {
    const followText = currentUserFollows ? "Unfollow" : "Follow";
    const unfollowedClassName = currentUserFollows ? "profile-unfollow-button" : "";

    return (
      <CustomButtom
        className={`profile-follow-button ${unfollowedClassName}`}
        onPress={this.handleFollowAction}
        text={followText}
      />
    );
  }

  renderProfileBadge() {
    return (
      <CustomButtom
        className="current-user-profile-badge"
        text={"Profile"}
      />
    );
  }

  renderButton(currentUserFollows, user) {
    if (user.id === this.props.currentUser.id) {
      return this.renderProfileBadge();
    } else {
      return this.renderFollowButton(currentUserFollows);
    }
  }

  renderNameRow(currentUserFollows, user) {
    const username = user.username;

    return (
      <div className="header-row main-profile-user-header-name-row">
        <div className="profile-header-username">{username}</div>
        {this.renderButton(currentUserFollows, user)}
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
      <div className="header-row">
        <div className="stats-row-item">
          <div className="stats-row-number">{postCount}</div>
          <div className="stats-row-text">posts</div>
        </div>
        <div className="stats-row-item">
          <div className="stats-row-number">{followerCount}</div>
          <div className="stats-row-text">followers</div>
        </div>
        <div className="stats-row-item">
          <div className="stats-row-number">{followingCount}</div>
          <div className="stats-row-text">following</div>
        </div>
      </div>
    );
  }

  renderBio(user) {
    return (
      <div className="main-profile-bio-container">
        <p className="main-profile-user-bio-name">{user.full_name}</p>
        <p className="main-profile-user-bio">{user.bio}</p>
      </div>
    );
  }

  render() {
    const {
      currentUserFollows,
      followerCount,
      followingCount,
      user,
      postCount,
    } = this.props;

    if (user === undefined) return null;

    const src = user.img_url ? user.img_url : "https://s3-us-west-2.amazonaws.com/instagraph-aa/empty-profile-picture.jpg";

    return (
      <div className="main-profile-user-header">
        <div className="main-profile-user-header-picture-container">
          <img
            src={src}
            width={160}
            height={160}
            align="middle"
            className="main-profile-header-user-picture"
          />
        </div>
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
