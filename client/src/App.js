import React, { useState } from 'react';
import Login from './components/Login/Login';
import 'normalize.css';
import Home from './components/Home/Home';
import SignUp from './components/Signup/SignUp';
import Add from './components/Add/Add';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const BOOKS_DATA = [
//   {
//     title: '1984',
//     author: 'George Orwell',
//     genre: 'Science Fiction',
//     firstPublishedYear: 1949,
//     image: 'https://m.media-amazon.com/images/I/61ZewDE3beL._SY342_.jpg',
//   },
//   {
//     title: 'To Kill a Mockingbird',
//     author: 'Harper Lee',
//     genre: 'Historical Fiction',
//     firstPublishedYear: 1960,
//     image:
//       'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg',
//   },
// ];

// const USERS_DATA = [];

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home booksData={booksData} />} />
          <Route path='/add' element={<Add addNewBook={addNewBook} />} />
          <Route path='/signup' element={<SignUp addNewUser={addNewUser} />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
  // const [booksData, setBooksData] = useState(BOOKS_DATA);
  // const [usersData, setUsersData] = useState(USERS_DATA);

  // const addNewBook = (newBook) => {
  //   setBooksData([...booksData, newBook]);
  // };

  // const addNewUser = (newUser) => {
  //   setUsersData([...usersData, newUser]);
  //  };

  // console.log(usersData);

  // return (
  //   <Router>
  //     <div>
  //       <Routes>
  //         <Route path="/" element={<Home booksData={booksData} />} />
  //         <Route path="/add" element={<Add addNewBook={addNewBook} />} />
  //         <Route path="/signup" element={<SignUp addNewUser={addNewUser} />} />
  //         <Route path="/login" element={<Login />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
};

export default App;
