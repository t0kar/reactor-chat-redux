import chatReducer from './chatReducer';
import commentReducer from './commentReducer';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
  chatReducer: chatReducer,
  commentReducer: commentReducer,
});

export default allReducers;
