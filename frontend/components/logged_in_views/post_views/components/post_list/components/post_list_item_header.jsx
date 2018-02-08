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
    // TODO: Make component a link to user profile page
    const {user} = this.props;
    const src = user && user.img_url !== "" ? user.img_url
                             : "https://s3-us-west-2.amazonaws.com/instagraph-aa/empty-profile-picture.jpg";

    return(
      <div className="post-author-header" >
        <img
          src={src}
          width={36}
          height={36}
          align="middle"
          className="post-list-item-user-thumb"
        />
      <p className="post-header-author-text post-item-author-text">{user ? user.username : ""}</p>
      </div>
    );
  }

};

export default PostListItemHeader;
