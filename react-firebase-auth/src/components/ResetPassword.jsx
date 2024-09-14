import React, { useState } from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import {Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const { resetPassword } = useUserAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleResetPassword = async (e)=>{
    e.preventDefault();
    try {
        alert(email)
        resetPassword(email)
        navigate("/")
        
    } catch (error) { 
        alert(error.message)
        setError(error.message)
    }
  }
  return (
    <div>
      <div className="p-4 box" style={{ width: '400px' }}>
        <h2 className="mb-5 text-center">Reset Password</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleResetPassword}>
          <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              className="p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>


          <div className="d-grid gap-2 p-2">
            <Button variant="primary" type="Submit">
              Reset Password
            </Button>
          </div>
        </Form>
    
        
      </div>
    </div>
  );
};

export default ResetPassword;
