import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {createPost} from '../../../actions/post_actions';

// Components
import PostUploadView from './post_upload_view';


const mapStateToProps = (state, ownProps) => {
  return ({
  // currentUser:
  formPost: {
    author_id: state.session.currentUser.id,
    img_url: "",
    description: ""
  }}
)}

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostUploadView));
