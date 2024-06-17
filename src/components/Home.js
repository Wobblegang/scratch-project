import React, { useState } from 'react';
import Booklist from './Booklist';
// import Login from './Login';
import { useNavigate } from 'react-router-dom';
// import { Navbar, Container } from 'react-bootstrap';
import './Home.scss';

const Home = ({ booksData }) => {
  const navigate = useNavigate();

  const goToAdd = () => {
    navigate('/add');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    // <Navbar>
    //   <Container>
    //     <Button>Login</Button>
    //   </Container>
    // </Navbar>
    <div>
      <div>
        <ul className="header-list">
          <li>Home</li>

          <li onClick={goToAdd}>Add</li>
          <li onClick={goToLogin}>Login</li>
          <li onClick={goToSignup}>Signup</li>
        </ul>
        <hr />
      </div>
      <Booklist booksData={booksData} />
    </div>
  );
};

export default Home;
