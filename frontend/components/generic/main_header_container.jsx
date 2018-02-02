import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestUser} from '../../actions/user_actions';

// Components
import MainHeader from './main_header';


const mapStateToProps = (state, ownProps) => {
  return ({
  user: state.users[ownProps.match.params.id],
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (user) => dispatch(requestUser(user))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainHeader));
