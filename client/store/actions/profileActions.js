import axios from 'axios';
import { GET_PROFILE, PROFILE_LOADING, CLEAR_PROFILE } from '../types'
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