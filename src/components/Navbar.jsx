import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

import './navbar.css'

function Navbar() {
    return (
        <div style={{display: 'flex', justifyContent:'space-between', padding: '0 10px'}} className="nav-container">
            <div>
                <Link className='link-nav' to='/'>
                    <h1>eCommerce</h1>
                </Link>
            </div>
            <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
                <li>
                    <Link className='link-nav' to='/signup'>
                        <h3>Sign Up</h3>
                    </Link>
                </li>
                <li>
                    <Link className='link-nav' to='/signin'>
                        <h3>Sign In</h3>
                    </Link>
                </li>
                <li>
                    <Link className='link-nav' to='/cart'>
                        <ShoppingBagIcon />
                    </Link>
                </li>
                <li>
                    <SettingsIcon />
                </li>
            </ul>
        </div>
    )
}

export default Navbar
