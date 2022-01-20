import React from 'react';
import NavBar from './NavBar';
import AccountBalance from './AccountBalance';
    
export default function Home (props) {
    return (
        <div>
            <NavBar />
            <AccountBalance balance={props.accountBalance} />
        </div>

    );
}
