import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

import './navbar.css'

function Navbar() {
    return (
        <div style={{display: 'flex', justifyContent:'space-between', padding: '0 10px'}} className="nav-container">
            <div>
                <Link to='/'>
                    <h1>eCommerce</h1>
                </Link>
            </div>
            <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
                <li>
                    <Link to='/cart'>
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