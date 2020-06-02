import { GET_PROFILE, PROFILE_LOADING, CLEAR_PROFILE } from "../types";

const INITIAL_STATE = {
  profiles: [],
  profile: {},
  loading: false
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: action.payload }

    case GET_PROFILE:
      return { ...state, profile: action.payload }

    case CLEAR_PROFILE:
        return { ...state, profile: null }
  
    default:
      return state;
  }
}
