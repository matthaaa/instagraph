import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../actions/comment_actions';

// Components
import PostListItem from './post_list_item';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestComments: () => dispatch(requestComments()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListItem));
