import React from 'react';
import NavBar from './NavBar';
import AccountBalance from './AccountBalance';
import { Outlet } from 'react-router-dom';
    
export default function Home (props) {
    return (
        <div>
            <NavBar />
            <AccountBalance balance={props.accountBalance} />
            <Outlet />  
        </div>
    );
}
