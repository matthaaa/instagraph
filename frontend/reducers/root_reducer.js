import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './errors_reducer';

const RootReducer = combineReducers({
  SessionReducer,
  ErrorReducer,
});

export default RootReducer;
