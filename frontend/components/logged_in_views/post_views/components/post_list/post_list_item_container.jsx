import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../actions/post_actions';
import {requestUser} from '../../../../../actions/user_actions';
import {addLike, deleteLike} from '../../../../../actions/like_actions';

// Components
import PostListItem from './post_list_item';


const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const user = state.users[post.author_id];
  const currentUser = state.session.currentUser;
  const likedPosts = currentUser.liked_posts;
  const currentUserLike = currentUser.currentLike;
  const liked = currentUserLike ? post.id === currentUserLike.post_id : false;

  return ({
    currentUser,
    liked,
    user,
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
)(PostListItem));
