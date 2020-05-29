import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import jwt_decode from 'jwt-decode'

import {wrapper, store} from '../store';
import setAuthToken from '../utils/setAuthToken'
import { setCurrentUser, logoutUser } from '../store/actions/authAction'
import '../styles/global.scss';

 const App = ({ Component, pageProps }: AppProps) => {

  //Run after refresh
  useEffect(() => {
    // Check and save current user AFTER REFRESH
    if(localStorage.authToken) {
      // Set Auth Header
      setAuthToken(localStorage.authToken)
      // Decode token and set user
      const decoded = jwt_decode(localStorage.authToken)
      store.dispatch(setCurrentUser(decoded))

      // Check for expired token
      const currentTime = Date.now()/1000
      if(currentTime > decoded.exp) {
        // Logout user
        store.dispatch(logoutUser)

        Router.push("/")
      }
    } 
  }, [])

  return <Component { ...pageProps } />
}

export default wrapper.withRedux(App)
