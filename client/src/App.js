import React, { useState } from 'react';
import 'normalize.css';
import './App.scss'
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Library from './components/Library/Library';

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
