import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  login,
  logout,
  clearErrors,
} from '../../actions/session_actions';

// Components
import LoginView from './login_view';


const mapStateToProps = (state, ownProps) => {
return ({
  user: {username: "", password: ""},
  errors: state.errors,
  isDemo: (ownProps.match.params.demo === "demo"),
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user)),
  clearErrors: () => dispatch(clearErrors()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView));
