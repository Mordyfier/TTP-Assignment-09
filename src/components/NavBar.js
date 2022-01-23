import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../bankofreact.png';
    
export default function NavBar (props) {
    return (
        <div>
            <nav className='navbar'>
            <img src={logo} alt="bank" className='nav-logo'/>
            <h1 className='nav-title'>Bank of React</h1>
                <div className='nav-links'>
                    <Link to="/" className='nav-link'>Home</Link>
                    {!props.userName && <Link to="/login" className='nav-link'>Log in</Link>}
                    {props.userName && <Link to="/userProfile" className='nav-link'>User Profile</Link>}
                    {props.userName && <Link to="/credits" className='nav-link'>Credits</Link>}
                    {props.userName &&<Link to="/debits" className='nav-link'>Debits</Link>}
                </div>
            {props.userName && <button type="button" onClick={() => props.setCurrentUser({userName: ""})}>Log Out</button>}
            </nav>
        </div>
    );
}
