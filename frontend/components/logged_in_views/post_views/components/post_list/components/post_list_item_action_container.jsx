import {connect} from 'react-redux';
import {withRouter} from 'react-router';

// Components
import {requestLike} from '../../../../../../actions/like_actions';
import PostListActionItems from './post_list_item_actions';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostListActionItems));
