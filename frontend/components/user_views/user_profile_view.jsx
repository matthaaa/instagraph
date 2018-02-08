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
    this.handlePressFollowButton = this.handlePressFollowButton.bind(this);
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
  handleFollow() {

  }

  handleUnfollow() {

  }

  handlePressFollowButton() {

  }

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {currentUserFollows, user} = this.props;
    const username = user ? user.username : "";
    const followText = "Follow";

    return (
      <div className="logged-in-view">
        <MainHeaderContainer />
        <div>
          {username}
        </div>
        <CustomButtom
          className="profile-follow-button"
          onPress={this.handlePressFollowButton}
          text={followText}
        />
      </div>
    );
  }

};

export default UserProfileView;
