import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestPost} from '../../../../../../../../actions/post_actions';

// Components
import CommentsListView from './comments_list_view';


const mapStateToProps = (state, ownProps) => {
  return ({
    post: ownProps.post,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestComments: () => dispatch(requestComments()),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsListView));
