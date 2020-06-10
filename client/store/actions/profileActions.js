import axios from 'axios';
import Router from 'next/router'
import { GET_PROFILE, PROFILE_LOADING, CLEAR_PROFILE, GET_PROFILE_ERRORS } from '../types'
import { serverURL } from '../../utils/constants'

export const getCurrentUserProfile = () => dispatch => {
  dispatch({ type: PROFILE_LOADING, payload: true })
  axios.get(`${serverURL}/api/profile`)
  .then(res => {
    dispatch({ type: GET_PROFILE, payload: res.data })
    dispatch({ type: PROFILE_LOADING, payload: false })
  }).catch(err => {
    dispatch({ type: GET_PROFILE, payload: {} })
    dispatch({ type: PROFILE_LOADING, payload: false })
  })
}

export const clearProfile = () => ({
  type: CLEAR_PROFILE
})

export const createProfile = (newUser) => dispatch => {
  // dispatch({ type:  }) LOADING...
  console.log(axios.defaults)
  axios.post(`${serverURL}/api/profile`, newUser)
  .then(res => Router.push('/dashboard'))
  .catch(err => {
    console.log(err)
    dispatch({ type: GET_PROFILE_ERRORS, errors: err.response.data})
  })
}