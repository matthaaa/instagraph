import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import {addLike, deleteLike} from '../../../../../../actions/like_actions';
import PostListActionItems from './post_list_item_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const likedPosts = currentUser.liked_posts;
  const post = ownProps.post;
  console.log(currentUser);
  const currentUserLike = currentUser.currentLike;

  return ({
    liked: !!currentUserLike,
    currentUserLike,
    currentUser,
    post,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addLike: (like) => dispatch(addLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListActionItems));
