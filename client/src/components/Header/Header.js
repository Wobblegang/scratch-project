import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='logo-container'>
        <p>TWLC</p> 
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
