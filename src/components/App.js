import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import Add from './Add';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const BOOKS_DATA = [
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Science Fiction',
    firstPublishedYear: 1949,
    image: '',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Historical Fiction',
    firstPublishedYear: 1960,
    image: '',
  },
  {
    title: 'a',
    author: 'abc',
    genre: 'Historical Fiction',
    firstPublishedYear: 1980,
    image: '',
  },
];

const USERS_DATA = [];

const App = () => {
  const [booksData, setBooksData] = useState(BOOKS_DATA);
  const [usersData, setUsersData] = useState(USERS_DATA);

  const addNewBook = (newBook) => {
    setBooksData([...booksData, newBook]);
  };

  const addNewUser = (newUser) => {
    setUsersData([...usersData, newUser]);
  };

  console.log(usersData);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home booksData={booksData} />} />
          <Route path="/add" element={<Add addNewBook={addNewBook} />} />
          <Route path="/signup" element={<SignUp addNewUser={addNewUser} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
