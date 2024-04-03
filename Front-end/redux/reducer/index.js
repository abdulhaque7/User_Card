// reducers/index.js

import { combineReducers } from 'redux';
import userReducer from './reducer';

const rootReducer = combineReducers({
  users: userReducer,
  // Add other reducers as needed
});

export default rootReducer;
