import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Page';
import Credits from './components/Credits';
import Debits from './components/Debits';
import TransactionForm from './components/TransactionForm';
import UserProfile from './components/UserProfile';
import Login from './components/Login';

export default function App() {
    const [balance, setBalance] = useState(0);
    const [credits, setCredits] = useState("");
    const [debits, setDebits] = useState("");
    const [currentUser, setCurrentUser] = useState("");

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
            <Route exact path="/" element={<Page title="Home"><Home userName={currentUser.userName} setCurrentUser={setCurrentUser} accountBalance={balance} /> </Page> } >
              <Route exact path="login" element={<Page title="Log in"><Login setCurrentUser={setCurrentUser} /></Page>} />
              <Route exact path="userProfile" element={<Page title="User Profile"><UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince} /></Page>} />
              <Route exact path="credits" 
                element={
                  <Page title="Credits">
                    <Credits key={credits} accountBalance={balance} userName={currentUser.userName} credits={credits} addTransaction={addTransaction}>
                        <TransactionForm addTransaction={addTransaction} isCredit={true} />
                    </Credits>
                  </Page>
                } 
              />
              <Route path="debits" 
                element={
                  <Page title="Debits">
                  <Debits key={debits} accountBalance={balance} userName={currentUser.userName} debits={debits} addTransaction={addTransaction}>
                    <TransactionForm addTransaction={addTransaction} />
                  </Debits>
                  </Page>
                } 
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
}