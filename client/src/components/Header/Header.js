import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img className='logo' src={logo}></img> 
      </div>
      <nav className='nav'>
        <ul>
          <li><Link>Search</Link></li>
          <li><Link>Register a Library</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
