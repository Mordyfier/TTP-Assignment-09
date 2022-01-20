import React, { useState } from 'react';
import Transaction from './Transaction';


    
export default function Credits ({credits, children }) {
    const [sortAspect, setSortAspect] = useState("");
    const currentCredits = credits;

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
            {credits && credits.map(x => <Transaction key={x.id} transaction={x} />)}
            {children}
            <button onClick={() => setSortAspect('description')}>Sort Alphabetically</button>
            <button onClick={() => setSortAspect('amount')}>Sort By Amount</button>
            <button onClick={() => setSortAspect('date')}>Sort By Date</button>
        </div>
    );
}
