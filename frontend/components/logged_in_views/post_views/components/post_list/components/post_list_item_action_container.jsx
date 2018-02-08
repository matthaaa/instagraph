import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import {addLike, deleteLike} from '../../../../../../actions/like_actions';
import {requestPost} from '../../../../../../actions/post_actions';
import {requestUser} from '../../../../../../actions/user_actions';
import PostListActionItems from './post_list_item_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const likedPosts = currentUser.liked_posts;
  const post = ownProps.post;
  console.log(currentUser);
  console.log(currentUser.currentLike);
  const currentUserLike = currentUser ? currentUser.currentLike : {};
  const liked = currentUserLike ? post.id === currentUserLike.post_id : false;

  return ({
    liked,
    currentUserLike,
    currentUser,
    post,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addLike: (like) => dispatch(addLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like)),
  requestPost: (postId) => dispatch(requestPost(postId)),
  requestUser: (user) => dispatch(requestUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListActionItems));
