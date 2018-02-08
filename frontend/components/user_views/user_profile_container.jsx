import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileView from './user_profile_view';
import {
  requestUser
} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => ({
  return ({
    user: state.users[ownProps.match.params.userId],
  })
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (user) => dispatch(requestUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileView));
