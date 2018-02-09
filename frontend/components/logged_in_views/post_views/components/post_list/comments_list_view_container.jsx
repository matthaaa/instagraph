import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestUser} from '../../../../../actions/user_actions';

// Components
import CommentsListView from './comments_list_view';


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;
  const post = state.posts[postId];
  const commentIds = post.comment_ids;
  const comments = commentIds.map((commentId) => (state.comments[commentId]))

  return ({
    post,
    comments,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (user) => dispatch(requestUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsListView));
