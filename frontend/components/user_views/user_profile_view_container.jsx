import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileView from './user_profile_view';
import {
  requestUsers
} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.userId];

  return ({
    currentUserFollows: user.current_user_follows,
    followerCount: user.follower_ids.length,
    followingCount: user.followee_ids.length,
    user,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUsers: () => dispatch(requestUsers()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileView));
