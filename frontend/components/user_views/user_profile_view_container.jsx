import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import UserProfileView from './user_profile_view';
import {
  requestUsers
} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(state);
  return ({
    user: state.users[ownProps.match.params.userId],
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUsers: () => dispatch(requestUsers()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileView));
