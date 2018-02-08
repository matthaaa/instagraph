import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileView from './user_profile_view';
import {requestUsers} from '../../actions/user_actions';
import {addFollow, deleteFollow} from '../../actions/follow_actions';


const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.userId];

  return ({
    currentUserFollows: user ? user.current_user_follows : false,
    followerCount: user ? user.follower_ids.length : 0,
    followingCount: user ? user.followee_ids.length : 0,
    user,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addFollow: (follow) => dispatch(addFollow(follow)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  requestUsers: () => dispatch(requestUsers()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileView));
