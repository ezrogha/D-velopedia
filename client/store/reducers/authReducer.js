import { HYDRATE } from "next-redux-wrapper";
import { ERRORS, AUTH_LOADING } from "../types";

const INITIAL_STATE = { errors: {}, loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case ERRORS:
      return { ...state, errors: action.payload };

    case AUTH_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};

// create a makeStore function
// const makeStore = context => createStore(authReducer);

// export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});
