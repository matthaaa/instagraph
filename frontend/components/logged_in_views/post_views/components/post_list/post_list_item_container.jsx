import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../actions/post_actions';

// Components
import PostListItem from './post_list_item';


const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const users = state.users;
  const comments = Object.values(state.comments);

  return ({
    user: users[post.author_id],
    comments,
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
