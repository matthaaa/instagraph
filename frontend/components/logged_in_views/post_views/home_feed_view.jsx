import React from 'react';
import {Component} from 'react';

// Components
import MainHeaderContainer from '../../generic/main_header_container';
import PostUploadContainer from '../upload_views/post_upload_view';
import PostListItem from './components/post_list/post_list_item';


class HomeFeedView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestPosts();
  }

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  renderPostListItem(post) {
    return (
      <PostListItem key={post.id} post={post} />
    );
  }

  renderPostFeed(posts) {
    return posts.map(post => (
      this.renderPostListItem(post)
    ))
  }

  render() {
    const {currentUser, posts} = this.props;

    return (
      <div className="logged-in-view">
        <MainHeaderContainer user={currentUser} />
        <PostUploadContainer currentUser={currentUser} />
        {this.renderPostFeed(posts)}
      </div>
    );
  }

};

export default HomeFeedView;
