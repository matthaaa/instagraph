import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import AddCommentForm from './add_comment_form';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  post: ownProps.post,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddCommentForm));
