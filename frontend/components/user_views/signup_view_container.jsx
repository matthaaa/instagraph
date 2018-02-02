import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  signup,
} from '../../actions/session_actions';

// Components
import SignupView from './signup_view';


const mapStateToProps = (state, ownProps) => ({
  // TODO: Add Full Name
  user: {email: "", full_name: "", username: "", password: ""}
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupView));
