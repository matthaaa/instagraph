import React from 'react';
import {Component} from 'react';

// Components
import MainHeaderComponent from '../../generic/main_header_component';
import PostListItem from './components/post_list_item';


class HomeFeedView extends Component {

  // ==================================================
  // Initialize
  // ==================================================

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestUsers();
  }

  // ==================================================
  // Callbacks
  // ==================================================

  // ==================================================
  // Render
  // ==================================================
  renderPostListItem(post) {
    // TODO: List of posts goes here. Currently testing single post
    return (
      <div>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
        <PostListItem post={post} />
        <br/>
      </div>
    );
  }

  renderPostFeed(posts) {
    return posts.map((post) => (
      this.renderPostListItem(post)
    ))
  }

  render() {
    const {currentUser, posts} = this.props;

    return (
      <div className="logged-in-view">
        <MainHeaderComponent user={currentUser} />
        {this.renderPostFeed(posts)}
      </div>
    );
  }

};

export default HomeFeedView;
