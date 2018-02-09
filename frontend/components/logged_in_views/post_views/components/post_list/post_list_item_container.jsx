import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../actions/post_actions';
import {addLike, deleteLike} from '../../../../../actions/like_actions';

// Components
import PostListItem from './post_list_item';


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.postId;
  const post = state.posts[postId];
  const user = state.users[post.author_id]
  const currentUser = state.session.currentUser;;

  return ({
    likesCount: post.likes_count,
    currentUser,
    user,
    post,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addLike: (like) => dispatch(addLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like)),
  requestPost: (postId) => dispatch(requestPost(postId)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListItem));
