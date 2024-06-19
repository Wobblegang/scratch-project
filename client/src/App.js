import React, { useState } from 'react';
import 'normalize.css';
import './App.scss'
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Library from './components/Library/Library';
import Add from './components/Add/Add.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/library/:charterNumber' element={<Library />} />
          <Route path='/library/:charterNumber/addBook' element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
