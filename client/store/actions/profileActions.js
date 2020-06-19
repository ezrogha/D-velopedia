import axios from 'axios';
import Router from 'next/router'
import { GET_PROFILE, GET_PROFILES, PROFILE_LOADING, CLEAR_PROFILE, GET_PROFILE_ERRORS } from '../types'
import { serverURL } from '../../utils/constants'

export const getCurrentUserProfile = () => dispatch => {
  dispatch({ type: PROFILE_LOADING, payload: true })
  axios.get(`${serverURL}/api/profile`)
  .then(res => {
    dispatch({ type: GET_PROFILE, payload: res.data })
  }).catch(err => {
    dispatch({ type: GET_PROFILE, payload: {} })
  })
}

export const clearProfile = () => ({
  type: CLEAR_PROFILE
})

export const createProfile = (newUser) => dispatch => {
  // dispatch({ type:  }) LOADING...
  axios.post(`${serverURL}/api/profile`, newUser)
  .then(res => Router.push('/dashboard'))
  .catch(err => {
    console.log(err)
    dispatch({ type: GET_PROFILE_ERRORS, errors: err.response.data})
  })
}

// GET ALL PROFILES
export const getProfiles = () => dispatch => {
  dispatch({ type: PROFILE_LOADING, payload: true })
  axios.get(`${serverURL}/api/profile/all`)
  .then(res => {
    dispatch({ type: GET_PROFILES, payload: res.data })
  }).catch(err => {
    dispatch({ type: GET_PROFILES, payload: null })
  })
}


// GET PROFILE BY HANDLE
export const getProfilebyHandle = (handle) => dispatch => {
  dispatch({ type: PROFILE_LOADING, payload: true })
  axios.get(`${serverURL}/api/profile/handle/${handle}`)
  .then(res => {
    dispatch({ type: GET_PROFILE, payload: res.data })
  }).catch(err => {
    dispatch({ type: GET_PROFILE, payload: null })
  })
}