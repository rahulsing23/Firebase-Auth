import React, { useState } from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {useUserAuth} from '../context/UserAuthContext'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {signUp} = useUserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError("")
    try {
      await signUp(email, password)
      navigate("/")
    } catch (error) {
      // console.log(error)
      setError(error.message)
    }
  }
  return (
    <div>
      <div className="p-4 box" style={{width:'400px'}}>
        <h2 className="mb-5 text-center">Sign Up</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              className='p-2'
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
                className='p-2'
                onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2 p-2">
            <Button variant="primary" type="Submit">
              Sign Up
            </Button>
          </div>
        </Form>
        <hr />
        <div>
         
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  )
}

export default Signup
