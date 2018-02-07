import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../../../../actions/post_actions';

// Components
import CommentsListView from './comments_list_view';


const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  // const comments_array = Object.values(state.comments);
  // const comments.keep_if {|comment| comment[post_id] === post.id};

  return ({
    post,
    hasComments: state.comments.length > 0,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsListView));
