import {connect} from 'react-redux';
import {
  createUser,
  requestUser,
} from '../../actions/user_actions';
import SessionFormView from './session_form';

const mapStateToProps = (state, ownProps) => ({
  user: state.users[ownProps.match.params.userId]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (user) => dispatch(requestUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SessionFormView)
