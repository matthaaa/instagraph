import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {createPost} from '../../../actions/post_actions';

// Components
import Component from './template_component';


const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPost: (post) => dispatch(createPost)
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component));
