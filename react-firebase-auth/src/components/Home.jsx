import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';

const Home = () => {
  const { user, logOut } = useUserAuth();
  console.log(user);

  const handleLogOut = async () =>{
    try {
        await logOut();
    } catch (error) {
        console.log(error.message)
    }
  }
  return (
    <>
      <div className="p-4 box mt-5 text-center">
        Hello Welcome
        <br />
        {user && user.email}
      </div>

      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogOut}>
          LogOut
        </Button>
      </div>
    </>
  );
};

export default Home;
