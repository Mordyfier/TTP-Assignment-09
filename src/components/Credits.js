import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import AccountBalance from './AccountBalance';
import Transaction from './Transaction';
import TransactionForm from './TransactionForm';

    
export default function Credits (props) {
    return (
        <>
            <NavBar />
            <AccountBalance balance={props.accountBalance} />
            <div key={props.credits}>
                {props.credits && props.credits.map(x => <Transaction key={x.id} transaction={x} />)}
            </div>
            <TransactionForm addTransaction={props.addTransaction} isCredit={true} />
        </>
    );
}
