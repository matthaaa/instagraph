import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestComment} from '../../../../../../../../actions/comment_actions';

// Components
import AddCommentForm from './add_comment_form';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  post: ownProps.post,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComment: (comment) => dispatch(requestComment(comment))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCommentForm));
