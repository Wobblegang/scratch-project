import React, { useState } from 'react';
import Booklist from './Booklist';
// import Login from './Login';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <div>
        <ul>
          <li>Home</li>
          <li>Current Library</li>
          <li onClick={goToAdd}>Add</li>
          <li onClick={goToLogin}>Login</li>
          <li onClick={goToSignup}>Signup</li>
        </ul>
      </div>
      <Booklist booksData={booksData} />
    </div>
  );
};

export default Home;
