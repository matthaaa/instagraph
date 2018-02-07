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
    this.handleToggleUploadView = this.handleToggleUploadView.bind(this);
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestPosts();
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
  renderPostListItem(post, comments) {
    return (
      <PostListItemContainer key={post.id} post={post} comments={comments}/>
    );
  }

  renderPostFeed(posts, comments) {
    return posts.map(post => (
      this.renderPostListItem(post,comments)
    ))
  }

  render() {
    const {currentUser, posts, comments} = this.props;
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
        {this.renderPostFeed(posts, comments)}
      </div>
    );
  }

};

export default HomeFeedView;
