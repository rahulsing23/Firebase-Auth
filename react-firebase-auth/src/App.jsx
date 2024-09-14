import React from 'react'
import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login';
import Home from './components/Home'
import {UserAuthContextProvider} from './context/UserAuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import ResetPassword from './components/ResetPassword';
const App = () => {
  return (
    <BrowserRouter>
      
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<ProtectedRoute> <Home /></ProtectedRoute>  }/>
        <Route path="/resetPassword" element={<ResetPassword/>}/>
       </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  )
}

export default App

