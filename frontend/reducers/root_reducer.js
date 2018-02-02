import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './errors_reducer';
import UserReducer from './user_reducer';
import PostReducer from './post_reducer';


const RootReducer = combineReducers({
  posts: PostReducer,
  session: SessionReducer,
  users: UserReducer,
  errors: ErrorReducer,
});


export default RootReducer;
