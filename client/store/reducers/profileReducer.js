import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_LOADING,
  CLEAR_PROFILE,
} from "../types";

const INITIAL_STATE = {
  profiles: [],
  profile: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: action.payload };

    case GET_PROFILE:
      return { ...state, profile: action.payload, loading: false };

    case CLEAR_PROFILE:
      return { ...state, profile: null };

    case GET_PROFILES:
      return { ...state, profiles: action.payload, loading: false };

    default:
      return state;
  }
};
