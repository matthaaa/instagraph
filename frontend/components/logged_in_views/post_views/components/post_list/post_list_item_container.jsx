import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../actions/post_actions';

// Components
import PostListItem from './post_list_item';


const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const users = state.users;
  const comments = post.comment_ids.map((comment_id) =>
    state.comments[comment_id]
  );

  return ({
    user: users[post.author_id],
    comments,
    post,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestComments: () => dispatch(requestComments()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListItem));
