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
    this.props.requestUser(this.props.user);
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
  render() {
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

};

export default UserProfileHeader;
