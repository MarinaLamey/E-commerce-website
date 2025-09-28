import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({children}) => {
       const {accessToken} = useSelector((state) => state.auth)
if (!accessToken) {
    return <Navigate to="/login?message=login_required" />;
  }

  return <>{children}</>;
}

export default ProtectedRoute
