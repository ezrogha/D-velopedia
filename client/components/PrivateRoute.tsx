import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Router from 'next/router'

export default ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.user)
  useEffect(() => {
    !isAuthenticated && Router.push("/")
  }, [])

  return (
    <div>
      {children}
    </div>
  )
}
