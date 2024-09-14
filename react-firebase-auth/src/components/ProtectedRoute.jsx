import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({children}) => {
    const  {user} = useUserAuth();
    const isauthenticated = !!user;

    return isauthenticated ? children: <Navigate to="/"/>
  
}

export default ProtectedRoute
