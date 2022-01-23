import React from 'react';

export default function Transaction(props) {
    const transactionDate = new Date(props.transaction.date);
    return (
        <div className='transactions'> 
                <td className='desc'>{props.transaction.description}</td> 
                <td className='symbol'>${props.debit}</td>
                <td className='amount'>{props.transaction.amount}</td> 
                <td className='time'>{transactionDate.toLocaleTimeString()}</td> 
                <td className='day'>{transactionDate.toLocaleDateString()}</td>
        </div>
    )
}