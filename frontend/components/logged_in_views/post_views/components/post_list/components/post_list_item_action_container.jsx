import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import {requestLike, deleteLike} from '../../../../../../actions/like_actions';
import PostListActionItems from './post_list_item_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const likedPosts = currentUser.liked_posts;
  const post = ownProps.post;

  return ({
    liked: likedPosts && likedPosts[post.id] ? true : false,
    currentUser,
    post,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestLike: (like) => dispatch(requestLike(like)),
  deleteLike: (like) => dispatch(deleteLike(like)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListActionItems));
