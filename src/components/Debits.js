import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import AccountBalance from './AccountBalance';
import Transaction from './Transaction';
import TransactionForm from './TransactionForm';
    
export default function Debits (props) {
    return (
        <>
            <NavBar />
            <AccountBalance balance={props.accountBalance} />
            {props.debits && props.debits.map(x => <Transaction key={x.id} transaction={x} debit={true} />)}
            <TransactionForm addTransaction={props.addTransaction} />
        </>
    );
}
