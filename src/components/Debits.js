import React, { useState } from 'react';
import Transaction from './Transaction';

    
export default function Debits ({debits, children}) {
    const [sortAspect, setSortAspect] = useState("");
    const currentDebits = debits;

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
            {debits && currentDebits.map(x => <Transaction key={x.id} transaction={x} debit={true} />)}
            {children}
            <button onClick={() => setSortAspect('description')}>Sort Alphabetically</button>
            <button onClick={() => setSortAspect('amount')}>Sort By Amount</button>
            <button onClick={() => setSortAspect('date')}>Sort By Date</button>
        </div>
    );
}
