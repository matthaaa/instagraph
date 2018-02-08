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
        followee_id: "",
      },
    }
  }
  // ==================================================
  // Lifecycle
  // ==================================================
  componentWillMount() {
    this.props.requestUsers();
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

    e.preventDefault();

    this.setState({
      follow: Object.assign(this.state.follow, {
        follower_id: currentUser.id,
        followed_id: user.id,
      })
    });

    if (currentUserFollows) {
      this.handleFollow(this.state.follow)
    } else {
      this.handleUnfollow(this.state.follow)
    }
  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {
      currentUserFollows,
      followerCount,
      followingCount,
      user,
    } = this.props;
    const username = user ? user.username : "";
    const followText = currentUserFollows ? "Unfollow" : "Follow";

    return (
      <div className="logged-in-view">
        <MainHeaderContainer />
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
    );
  }

};

export default UserProfileView;
