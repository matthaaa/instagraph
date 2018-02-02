import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import MainHeader from './main_header';


const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return ({
  // TODO: Add user prop to MainHeader.
  // user: state.users[ownProps.match.params.id],
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // TODO: Fetch user information.
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainHeader));
