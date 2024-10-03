import React, { useState } from 'react';
import Balance from './balance.jsx';
import History from './history.jsx';
import NewTransaction from './newTranscations.jsx';
import './balance.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (text, amount) => {
    const numericAmount = +amount; 
    setTransactions(prevTransactions => [
      ...prevTransactions,
      { 
        text, 
        amount: numericAmount 
      }
    ]);
  };

  return (
    <div className="MainContainer">
      <Balance transactions={transactions} />
      <History transactions={transactions} />
      <NewTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;




