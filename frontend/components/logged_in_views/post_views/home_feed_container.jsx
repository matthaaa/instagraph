import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPosts} from '../../../actions/post_actions';
import {requestUsers} from '../../../actions/user_actions';

// Components
import HomeFeedView from './home_feed_view';


const mapStateToProps = (state, ownProps) => {
  const users = Object.values(state.users);
  const posts = Object.values(state.posts);
  const currentUser = state.session.currentUser;

  return ({
    currentUser: state.session.currentUser,
    uploadViewIsVisible: ownProps.uploadViewIsVisible,
    followedPosts:
    users,
    posts,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFeedView));
