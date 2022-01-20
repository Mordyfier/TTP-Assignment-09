import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../bankofreact.png';
    
export default function NavBar () {
    return (
        <div>
            <nav className='navbar'>
            <img src={logo} alt="bank" className='nav-logo'/>
            <h1 className='nav-title'>Bank of React</h1>
                <div className='nav-links'>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/credits" className='nav-link'>Credits</Link>
                    <Link to="/debits" className='nav-link'>Debits</Link>
                </div>
            </nav>
        </div>
    );
}
