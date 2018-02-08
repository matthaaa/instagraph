import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileHeader from './user_profile_header';
import {requestUsers, requestUser} from '../../../actions/user_actions';
import {addFollow, deleteFollow} from '../../../actions/follow_actions';
import {requestPosts} from '../../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  const user = ownProps.user;
  const currentUser = ownProps.currentUser;

  return ({
    user,
    currentUser,
    currentUserFollows: user && user.current_user_follows,
    followerCount: user ? user.follower_ids.length : 0,
    followingCount: user ? user.followee_ids.length : 0,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addFollow: (follow) => dispatch(addFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  requestUser: (user) => dispatch(requestUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileHeader));
