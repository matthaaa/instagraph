import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import PostListItem from './post_list_item';


const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const comments = Object.values(state.comments);
  console.log(state);
  console.log(ownProps);
  console.log(comments);
  console.log(post);
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
)(PostListItem));
