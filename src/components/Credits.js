import React, { useState, useEffect } from 'react';
import Transaction from './Transaction';
import { useNavigate } from 'react-router-dom';


    
export default function Credits ({credits, children, userName }) {
    const [sortAspect, setSortAspect] = useState("");
    const currentCredits = credits;

    const navigate = useNavigate();
    useEffect(() => {
        if (!userName) {
            navigate('/login', {state : {notLoggedIn : true}});
        }
    })

    if (sortAspect) { 
        currentCredits.sort((firstEl, secondEl) => {
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
        <div className='credits'>
            <h1>Here are all your current credits:</h1>
            {credits && credits.map(x => <Transaction key={x.id} transaction={x} />)}
            {children}
            <button onClick={() => setSortAspect('description')}>Sort Alphabetically</button>
            <button onClick={() => setSortAspect('amount')}>Sort By Amount</button>
            <button onClick={() => setSortAspect('date')}>Sort By Date</button>
        </div>
    );
}
