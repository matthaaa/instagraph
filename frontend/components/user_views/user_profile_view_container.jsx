import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileView from './user_profile_view';
import {requestUsers, requestUser} from '../../actions/user_actions';
import {addFollow, deleteFollow} from '../../actions/follow_actions';
import {requestPosts} from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.userId];
  const posts = user ? user.post_ids.map((postId) => (state.posts[postId])) : [];

  return ({
    currentUser: state.session.currentUser,
    currentUserFollows: user ? user.current_user_follows : false,
    followerCount: user ? user.follower_ids.length : 0,
    followingCount: user ? user.followee_ids.length : 0,
    user,
    posts,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addFollow: (follow) => dispatch(addFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  requestPosts: () => dispatch(requestPosts()),
  requestUsers: () => dispatch(requestUsers()),
  requestUser: (user) => dispatch(requestUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileView));
