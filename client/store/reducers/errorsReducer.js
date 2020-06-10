import {GET_PROFILE_ERRORS} from '../types'

const INITIAL_STATE = {
  profileErrors: {}
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PROFILE_ERRORS:
      return {...state, profileErrors: action.payload}
  
    default:
      return state;
  }
}