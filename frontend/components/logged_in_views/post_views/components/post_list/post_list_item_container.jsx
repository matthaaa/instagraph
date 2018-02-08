import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../actions/post_actions';

// Components
import PostListItem from './post_list_item';


const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const user = state.users[post.author_id];
  const comments = state.comments;

  return ({
    comments,
    user,
    post,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPost: () => dispatch(requestPost(ownProps.post.id))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListItem));