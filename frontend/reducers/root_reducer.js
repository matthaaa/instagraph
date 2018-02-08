import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './errors_reducer';
import UserReducer from './user_reducer';
import PostReducer from './post_reducer';
import CommentReducer from './comment_reducer';
import LikeReducer from './like_reducer';
import FollowReducer from './follow_reducer';


const RootReducer = combineReducers({
  errors: ErrorReducer,
  session: SessionReducer,
  users: UserReducer,
  posts: PostReducer,
  comments: CommentReducer,
  likes: LikeReducer,
  follows: FollowReducer,
});


export default RootReducer;
