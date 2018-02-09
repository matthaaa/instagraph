import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../actions/post_actions';

// Components
import PostShowView from './post_show_view';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;

  return ({
    currentUser: state.session.currentUser,
  });
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPost: (postId) => dispatch(requestPost(postId)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostShowView));
