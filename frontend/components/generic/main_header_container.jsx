import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import MainHeader from './main_header';

// Temporary Test Import
import {logout} from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainHeader));
