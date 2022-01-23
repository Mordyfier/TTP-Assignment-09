import React from 'react';
import NavBar from './NavBar';
import AccountBalance from './AccountBalance';
import { Outlet, useLocation, Link } from 'react-router-dom';
    
export default function Home (props) {
    const location = useLocation();
    return (
        <div>
            <NavBar setCurrentUser={props.setCurrentUser} userName={props.userName} />
            {location.pathname === '/' && !props.userName && 
                <div className='home'>
                    <h1>Welcome to Bank of React!</h1>
                    <p><Link to='/login' className='login-link'>Log In</Link> to see your profile, balance, and transactions.</p>
                </div>
            }
            {props.userName && <AccountBalance balance={props.accountBalance} />}
            <Outlet />  
        </div>
    );
}
