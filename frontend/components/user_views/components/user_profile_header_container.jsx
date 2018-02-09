import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileHeader from './user_profile_header';
import {requestUsers, requestUser, requestFollowUser} from '../../../actions/user_actions';
import {addFollow, deleteFollow} from '../../../actions/follow_actions';
import {requestPosts} from '../../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.userId];
  const currentUser = ownProps.currentUser;

  return ({
    user,
    currentUser,
    currentUserFollows: user && user.current_user_follows,
    followerCount: user.follower_ids.length,
    followingCount: user.followee_ids.length,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addFollow: (follow) => dispatch(addFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  requestUser: (user) => dispatch(requestUser(user)),
  requestFollowUser: (user) => dispatch(requestFollowUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileHeader));
