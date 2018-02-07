import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import {requestLike, deleteLike} from '../../../../../../actions/like_actions';
import PostListActionItems from './post_list_item_actions';


const mapStateToProps = (state, ownProps) => {
  const likes = ownProps.post.likes;
  const currentUser = state.session.currentUser;
  const liked = likes.one((like) => like.id === currentUser.id);

  return ({
    post: ownProps.post,
    currentUser,
    liked,
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
