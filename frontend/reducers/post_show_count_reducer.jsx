import {merge} from 'lodash';

// import {} from '../actions/post_actions';

const postShowCountReducer = (oldState = 0, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case INCREMENT_COUNT:
      return oldState + 5;
    case RESET_COUNT:
      return 0;
    default:
      return oldState;
  }
};

export default postShowCountReducer;
