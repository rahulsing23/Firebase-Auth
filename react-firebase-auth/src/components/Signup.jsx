import React from 'react'
import GoogleButton from 'react-google-button'
import {Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className="p-4 box">
        <h2 className="mb-5 text-center">Sign Up</h2>
        <Form>
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              className='p-2'
            />
          </Form.Group>

          <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
                className='p-2'
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
          <GoogleButton
            className="g-btn"
            style={{width:'400px'}}
            type="dark"
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
  )
}

export default Login
