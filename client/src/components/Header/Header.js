import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from '../../../public/images/logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo}></img>
        <p className='site-name'>Little Free Library Catalog</p>
      </div>
      <nav className='nav'>
        <ul>
          <li><Link to='/'>Search</Link></li>
          <li><Link to='/register'>Register a Library</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header