import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import MainHeader from './main_header';


const mapStateToProps = (state, ownProps) => {
  return ({
  user: state.users[ownProps.match.params.id],
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO: Fetch user information.
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainHeader));
