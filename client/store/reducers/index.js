import { combineReducers } from 'redux';

import authReducer from './authReducer';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import errorsReducer from './errorsReducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
  errors: errorsReducer
})