import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  signup,
  clearErrors,
} from '../../actions/session_actions';

// Components
import SignupView from './signup_view';


const mapStateToProps = (state, ownProps) => ({
  user: {email: "", full_name: "", username: "", password: ""},
  errors: state.errors,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupView));
