import React, { useState } from 'react'
import GoogleButton from 'react-google-button'
import {Form, Button, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useUserAuth} from '../context/UserAuthContext'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {login, googleSignIn} = useUserAuth()
  const navigate = useNavigate()


  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("")
    try {
      await login(email, password)
      navigate("/home")
    } catch (error) {
  
      setError(error.message)
    }
  }

  const handleGoogleSignIn = async (e) =>{
    e.preventDefault();
    try {
      await googleSignIn();
      navigate('/home')
    } catch (error) {
      setError(error.message)
    }
  }



  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-5 text-center">Login</h2>
        { error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              className='p-2'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className='p-2'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2 p-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
          <div className="float-end">
          <p ><Link to="/resetPassword">Forget Password</Link></p>
          </div>
         
        </Form>
        <br/>
        <hr />
        <div className='p-2'>
          <GoogleButton
            className="g-btn"
            style={{width:'400px'}}
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}

export default Login
