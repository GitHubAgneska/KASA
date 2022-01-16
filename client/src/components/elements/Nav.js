import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <div className='topnav-wrapper'>
            <nav className='top-nav'>
                <li>
                    <Link to="/home" className='nav-link link-home' >Accueil</Link>
                </li>
                <li>
                    <Link to="/about" className='nav-link link-about'>A propos</Link>
                </li>
            </nav>
        </div>
    )
}

export default Nav
