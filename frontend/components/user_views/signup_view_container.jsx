import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  signup,
} from '../../actions/session_actions';

// Components
import SignupView from './signup_view';

const mapStateToProps = (state, ownProps) => ({
  // TODO: Add Email and Full Name
  user: {username: "", password: ""}
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupView));
