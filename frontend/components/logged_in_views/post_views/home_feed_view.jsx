import React from 'react';
import {Component} from 'react';

// Components
import MainHeader from '../../generic/main_header';
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
      </div>
    );
  }

  render() {
    const {currentUser} = this.props;

    return (
      <div className="logged-in-view">
        <MainHeader user={currentUser} />
        {this.renderFeedContent()}
      </div>
    );
  }

};

export default HomeFeedView;
