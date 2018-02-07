import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPosts} from '../../../actions/post_actions';
import {requestUsers} from '../../../actions/user_actions';
import {requestComments} from '../../../actions/comment_actions';

// Components
import HomeFeedView from './home_feed_view';


const mapStateToProps = (state, ownProps) => {
  console.log("home state", state);
  const posts = Object.values(state.posts);
  const users = Object.values(state.users);

  return ({
    currentUser: state.session.currentUser,
    users,
    posts,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
  requestComments: () => dispatch(requestComments()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFeedView));
