import React from 'react';

export default function Transaction(props) {
    const transactionDate = new Date(props.transaction.date);
    return (
        <h1>{props.transaction.description} ${props.debit && '-'}{props.transaction.amount} {transactionDate.toLocaleTimeString()} {transactionDate.toLocaleDateString()}</h1>
    )
}