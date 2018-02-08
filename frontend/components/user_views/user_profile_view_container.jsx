import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileView from './user_profile_view';
import {requestUsers, requestUser} from '../../actions/user_actions';
import {requestPosts} from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.users[userId];
  const postIds = user ? user.post_ids : [];
  const posts = user ? postIds.map((postId) => (state.posts[postId])) : [];

  return ({
    currentUser: state.session.currentUser,
    currentUserFollows: user && user.current_user_follows,
    followerCount: user ? user.follower_ids.length : 0,
    followingCount: user ? user.followee_ids.length : 0,
    postIds,
    user,
    posts,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
  requestUser: (user) => dispatch(requestUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileView));
