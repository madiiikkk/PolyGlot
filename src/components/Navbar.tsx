import React from 'react'
import { Link } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <div className=''>
                <Link to="/" className="logo">
                    PolyGlot
                </Link>
            </div>
            
            <a className="links"></a>
        </nav>

    </div>
  )
}

export default Navbar