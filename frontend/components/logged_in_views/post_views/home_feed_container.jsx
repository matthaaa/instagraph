import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestUsers} from '../../../actions/user_actions';
import {receivePosts} from '../../../actions/post_actions';

// Components
import HomeFeedView from './home_feed_view';


const mapStateToProps = (state, ownProps) => {
  const users = Object.values(state.users);
  const posts = Object.values(state.posts);

  return ({
    currentUser: state.session.currentUser,
    users,
    posts,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUsers: () => dispatch(requestUsers()),
  requestPosts: () => dispatch(requestPosts()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFeedView));
