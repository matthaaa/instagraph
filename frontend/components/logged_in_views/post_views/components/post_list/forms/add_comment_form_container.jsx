import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {addComment} from '../../../../../../actions/comment_actions';

// Components
import AddCommentForm from './add_comment_form';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  post: ownProps.post,
  formId: ownProps.formId,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(addComment(comment))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCommentForm));
