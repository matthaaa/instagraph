import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../../../../actions/post_actions';

// Components
import CommentsListView from './comments_list_view';


const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const commentIds = post.comment_ids;
  const comments = commentIds.map((commentId) => (state.comments[commentId]))

  return ({
    post,
    comments,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsListView));
