import React from 'react';
import {Component} from 'react';


class UserProfileView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  render() {
    const {user} = this.props;

    return (
      <div>{user.username}</div>
    );
  }

};

export default UserProfileView;
