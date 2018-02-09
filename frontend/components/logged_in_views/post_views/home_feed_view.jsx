import React from 'react';
import {Component} from 'react';

// Components
import MainHeaderContainer from '../../generic/main_header_container';
import PostUploadContainer from '../upload_views/post_upload_container';
import PostListItemContainer from './components/post_list/post_list_item_container';


class HomeFeedView extends Component {

  // ==================================================
  // Initialize
  // ==================================================
  constructor(props) {
    super(props);
    this.state = {
      showUploadPostView: false,
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleToggleUploadView = this.handleToggleUploadView.bind(this);
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestPosts();
    this.props.requestUsers();
  }

  // ==================================================
  // Event Handlers
  // ==================================================
  handleToggleUploadView() {
    this.setState({showUploadPostView: !this.state.showUploadPostView})
  }

  handleCloseModal() {
    this.setState({showUploadPostView: false})
  }

  // ==================================================
  // Render
  // ==================================================
  renderPostListItem(post) {
    return (
      <PostListItemContainer
        key={post.id}
        postId={post.id}
      />

    );
  }

  renderPostFeed(posts) {
    return posts.reverse().map(post => (
      this.renderPostListItem(post)
    ))
  }

  render() {
    const {currentUser, posts, users} = this.props;
    const {showUploadPostView} = this.state;

    return (
      <div className="logged-in-view">
        <MainHeaderContainer
          user={currentUser}
          uploadViewIsVisible={showUploadPostView}
          onToggleUploadView={this.handleToggleUploadView}
        />
        <PostUploadContainer
          isVisible={showUploadPostView}
          currentUser={currentUser}
          onCloseModal={this.handleCloseModal}
        />
        {this.renderPostFeed(posts)}
      </div>
    );
  }

};

export default HomeFeedView;
