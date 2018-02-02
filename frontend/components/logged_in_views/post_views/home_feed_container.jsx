import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestUsers} from '../../../actions/user_actions';

// Components
import HomeFeedView from './home_feed_view';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.sessions.currentUser,
  users: Object.values(state.users),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUsers: () => dispatch(requestUsers),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeFeedView));
