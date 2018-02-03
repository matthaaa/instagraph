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
  renderFeedContent() {
    // TODO: List of posts goes here.
    return (
      <div>
        <PostListItem />
        <br/>
        <PostListItem />
        <br/>
        <PostListItem />
        <br/>
        <PostListItem />
        <br/>
        <PostListItem />
        <br/>
        <PostListItem />
        <br/>
        <PostListItem />
      </div>
    );
  }

  render() {
    const {currentUser} = this.props;

    return (
      <div className="logged-in-view">
        <MainHeaderComponent user={currentUser} />
        {this.renderFeedContent()}
      </div>
    );
  }

};

export default HomeFeedView;
