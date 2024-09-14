import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
    const  {user} = useUserAuth();
    const isauthenticated = !!user;
    console.log(isauthenticated)
    return isauthenticated ? children: <Navigate to="/"/>
  
}

export default ProtectedRoute
