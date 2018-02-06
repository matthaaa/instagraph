import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {createNewPost} from '../../../actions/post_actions';

// Components
import PostUploadView from './post_upload_view';


const mapStateToProps = (state, ownProps) => ({
  isVisible: ownProps.isVisible,
  errors: state.errors.posts,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createNewPost(post)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostUploadView));
