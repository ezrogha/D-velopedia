import axios from 'axios';
import { ERRORS } from '../types'
import { serverURL } from '../../utils/constants'

export const registerUser = (newUser) => (dispatch) => {
  axios
    .post(`${serverURL}/api/users/register`, newUser)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      dispatch({ type: ERRORS, payload: error.response.data })
    });
};

export const loginUser = (newUser) => (dispatch) => {
  axios
    .post(`${serverURL}/api/users/login`, newUser)
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      dispatch({ type: ERRORS, payload: error.response.data })
    });
};
