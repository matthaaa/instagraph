import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {requestUser} from '../../../../../actions/user_actions';

// Components
import CommentsListItem from './comment_list_item';


const mapStateToProps = (state, ownProps) => {
  const comment = ownProps.comment;
  const user = state.users[comment.user_id];

  return ({
    user,
    comment,
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestUser: (user) => dispatch(requestUser(user)),
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsListItem));
