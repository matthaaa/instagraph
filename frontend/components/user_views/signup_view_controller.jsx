import {connect} from 'react-redux';
import {
  createUser,
  requestUser,
} from '../../actions/user_actions';
import LoginView from './login_view';

const mapStateToProps = (state, ownProps) => ({
  // TODO: Add Email and Full Name
  user: {username: "", password: ""}
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (user) => dispatch(requestUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView)
