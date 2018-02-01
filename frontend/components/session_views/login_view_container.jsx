import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {
  login,
  logout,
} from '../../actions/session_actions';

// Components
import LoginView from './login_view';


const mapStateToProps = (state, ownProps) => ({
  user: {username: "", password: ""},
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  logout: (user) => dispatch(logout(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView));
