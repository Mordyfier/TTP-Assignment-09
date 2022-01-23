import React, { useState } from 'react';

export default function TransactionForm (props) {
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("No Description");
    const idGen = len => {
        return Math.random().toString(16).substring(2, len+2);
    }
    let id = `${idGen(8)}-${idGen(4)}-${idGen(4)}-${idGen(4)}-${idGen(12)}`;
    
    return (
        <form className='transaction-form' 
            onSubmit={e => {
                e.preventDefault();
                props.addTransaction(props.isCredit, id, amount, description);
            }}>
            <label>
                Amount: <input type="number" onChange={(e) => setAmount(Number(e.target.value))} />
            </label>
            <label>
                Description: <input type="text" onChange={(e) => setDescription(e.target.value)} />
            </label>
            <input className="submit-button" type="submit" value="Submit" />
        </form>
    )
}