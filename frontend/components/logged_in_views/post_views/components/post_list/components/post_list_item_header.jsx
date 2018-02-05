import React from 'react';
import {Component} from 'react';


class PostListItemHeader extends Component {

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
    const src = user.img_url ? user.img_url 
                             : "app/assets/images/empty-profile-picture.jpg";

    return(
      <div className="post-author-header" >
        <img
          src={user.img_url}
          width={40}
          height={40}
          align="middle"
          className="post-list-item-user-thumb"
        />
        <p className="post-header-author-text">{user.username}</p>
      </div>
    );
  }

};

export default PostListItemHeader;
