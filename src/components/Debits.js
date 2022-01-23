import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Transaction from './Transaction';

    
export default function Debits ({debits, children, userName}) {
    const [sortAspect, setSortAspect] = useState("");
    const currentDebits = debits;
    
    const navigate = useNavigate();
    useEffect(() => {
        if (!userName) {
            navigate('/login', {state : {notLoggedIn : true}});
        }
    })

    if (sortAspect) { 
        currentDebits.sort((firstEl, secondEl) => {
            if (firstEl[sortAspect] < secondEl[sortAspect]) {
                return -1;
            } else if (firstEl[sortAspect] > secondEl[sortAspect]) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    return (
        <div className='debits'>
            <h1>Here are all your current debits:</h1>
            {debits && currentDebits.map(x => <Transaction key={x.id} transaction={x} debit={true} />)}
            {children}
            <button onClick={() => setSortAspect('description')}>Sort Alphabetically</button>
            <button onClick={() => setSortAspect('amount')}>Sort By Amount</button>
            <button onClick={() => setSortAspect('date')}>Sort By Date</button>
        </div>
    );
}
