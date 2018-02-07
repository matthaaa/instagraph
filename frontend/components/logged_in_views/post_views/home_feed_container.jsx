import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPosts} from '../../../actions/post_actions';

// Components
import HomeFeedView from './home_feed_view';


const mapStateToProps = (state, ownProps) => {
  const posts = Object.values(state.posts);
  return ({
    currentUser: state.session.currentUser,
    posts,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPosts: () => dispatch(requestPosts()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFeedView));
