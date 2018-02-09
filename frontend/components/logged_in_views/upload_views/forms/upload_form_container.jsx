import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {createNewPost} from '../../../../actions/post_actions';

// Components
import UploadForm from './upload_form';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  onCloseModal: ownProps.onCloseModal,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewPost: (post) => dispatch(createNewPost(post))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(UploadForm));
