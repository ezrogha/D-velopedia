import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken'
import { clearProfile } from './profileActions'
import { ERRORS, AUTH_LOADING, SET_CURRENT_USER } from '../types'
import { serverURL } from '../../utils/constants'

export const registerUser = (newUser, hideRegisterForm, showLoginForm ) => (dispatch) => {
  dispatch({type: AUTH_LOADING, payload: true})
  axios
    .post(`${serverURL}/api/users/register`, newUser)
    .then((res) => {
      dispatch({type: AUTH_LOADING, payload: false})
      dispatch({type: ERRORS, payload: {}})
      // Hide register modal and display login modal
      hideRegisterForm()
      setTimeout(() => {
        showLoginForm()
      }, 500);
    })
    .catch((error) => {
      dispatch({type: AUTH_LOADING, payload: false})
      dispatch({ type: ERRORS, payload: error.response.data })
    });
};

export const loginUser = (newUser) => (dispatch) => {
  dispatch({type: AUTH_LOADING, payload: true})
  axios
    .post(`${serverURL}/api/users/login`, newUser)
    .then((res) => {
      dispatch({type: AUTH_LOADING, payload: false})
      // Store token in localstorage
      const { token } = res.data
      localStorage.setItem("authToken", token)
      // Add token to auth header
      setAuthToken(token)
      // decode user token to get data
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded))
    })
    .catch((error) => {
      dispatch({type: AUTH_LOADING, payload: false})
      dispatch({ type: ERRORS, payload: error.response.data })
    });
};

export const setCurrentUser = (decoded) => ({
  type: SET_CURRENT_USER,
  payload: decoded
})

export const logoutUser = () => dispatch => {
  // Remove token from local storage and auth header
  localStorage.removeItem("authToken");
  setAuthToken(false);

  // remove User
  dispatch(setCurrentUser({}))
  dispatch(clearProfile())
}
