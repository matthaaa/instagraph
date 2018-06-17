import React from 'react';
import {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';

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
      hasMoreItems: true,
    };
    this.loadPosts = this.loadPosts.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleToggleUploadView = this.handleToggleUploadView.bind(this);
  }

  // ==================================================
  // Lifecycle
  // ==================================================
  componentDidMount() {
    this.props.requestUsers();
    this.props.requestPosts();
    // document.addEventListener('scroll', (event) => {
      // console.log("hello");
      // console.log(document.body);
      // if (document.body.scrollHeight == document.body.scrollTop + window.innerHeight) {
      //   alert("Bottom!");
      // }
    // });

    // window.addEventListener('scroll', this.onScroll, false);
  }


  // ==================================================
  // Methods
  // ==================================================
  loadPosts() {
    // TODO: Implement post loading method
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
          uploadViewIsVisible={showUploadPostView}
          onToggleUploadView={this.handleToggleUploadView}
        />
        <PostUploadContainer
          isVisible={showUploadPostView}
          currentUser={currentUser}
          onCloseModal={this.handleCloseModal}
        />
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadPosts}
          hasMore={this.state.hasMore}
          loader={<div className="loader" key={0}>Loading ...</div>}>
          {this.renderPostFeed(posts)}
        </InfiniteScroll>
      </div>
    );
  }

};

export default HomeFeedView;
