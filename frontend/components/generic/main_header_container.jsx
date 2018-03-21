import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {logout} from '../../actions/session_actions';

// Components
import MainHeader from './main_header';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser.id ? state.session.currentUser : state.session.currentUser.user;

  return ({
    currentUser,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainHeader));
