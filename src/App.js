import React, { useEffect, useState } from 'react';
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Credits from './components/Credits';
import Debits from './components/Debits';

export default function App() {
    const [balance, setBalance] = useState(0);
    const [credits, setCredits] = useState("");
    const [debits, setDebits] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const creds = await fetchCredits();
        const debts = await fetchDebits();
        setCredits(creds);
        setDebits(debts);
        setBalance(computeBalance(creds, debts));
      }
      fetchData();
    }, [])

    async function fetchCredits() {
      const response = await fetch('https://moj-api.herokuapp.com/credits');
      const credits = await response.json();
      return credits;
    }

    async function fetchDebits() {
      const response = await fetch('https://moj-api.herokuapp.com/debits');
      const debits = await response.json();
      return debits;
    }

    function computeBalance(creds, debts) {
      const revenues = creds.map(x => x.amount).reduce((previousValue, currentValue) => previousValue + currentValue);
      const expenses = debts.map(x => x.amount).reduce((previousValue, currentValue) => previousValue + currentValue);
      return Math.floor((revenues - expenses) * 100) / 100;
    }

    function addTransaction(isCredit, id, amount, description) {
      const now = new Date();
      const newTransaction = {
        id : id,
        amount : amount,
        description : description,
        date : now.toISOString()
      }
      isCredit ? setCredits(prevState => [...prevState, newTransaction]) : setDebits(prevState => [...prevState, newTransaction]);
      isCredit ? setBalance(Math.floor((balance + amount) * 100) / 100) : setBalance(Math.floor((balance - amount) * 100) / 100);
    }

    return (
      <div className='app'>
        <HashRouter>
          <Routes>
            <Route exact path="/">
              <Route exact path="/" element={<Home accountBalance={balance} />} />
              <Route path="credits" element={<Credits key={credits} accountBalance={balance} credits={credits} addTransaction={addTransaction} />} />
              <Route path="debits" element={<Debits key={debits} accountBalance={balance} debits={debits} addTransaction={addTransaction} />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
}