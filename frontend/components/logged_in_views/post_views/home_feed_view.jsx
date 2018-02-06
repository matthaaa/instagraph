import React from 'react';
import {Component} from 'react';

// Components
import MainHeaderContainer from '../../generic/main_header_container';
import PostUploadContainer from '../upload_views/post_upload_container';
import PostListItem from './components/post_list/post_list_item';


class HomeFeedView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      showUploadPostView: false,
    };
    this.handleToggleUploadView = this.handleToggleUploadView.bind(this);
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestComments();
    this.props.requestPosts();
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleToggleUploadView() {
    this.setState({showUploadPostView: !this.state.showUploadPostView})
  }

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
    const {showUploadPostView} = this.state;

    return (
      <div className="logged-in-view">
        <MainHeaderContainer
          user={currentUser}
          onToggleUploadView={this.handleToggleUploadView}
        />
        <PostUploadContainer
          isVisible={showUploadPostView}
          currentUser={currentUser}
        />
        {this.renderPostFeed(posts)}
      </div>
    );
  }

};

export default HomeFeedView;
