import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  createUser,
  requestUser,
} from '../../actions/user_actions';
import SignupView from './signup_view';

const mapStateToProps = (state, ownProps) => ({
  // TODO: Add Email and Full Name
  user: {username: "", password: ""}
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (user) => dispatch(requestUser(user))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupView));
