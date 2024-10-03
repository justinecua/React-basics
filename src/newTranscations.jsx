import React, { useState } from 'react';

function NewTransaction({ addTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && amount) {
      addTransaction(text, amount);
      setText('');
      setAmount('');
    }
  };

  return (
    <div className="TransactionContainer">
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="transactionInputs">
          <label>Expense Category</label>
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Add Category" 
          />
        </div>
        <div className="transactionInputs">
          <label>Amount</label>
          <p>(negative for expense, positive for income)</p>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Add Amount" 
          />
        </div>
        <button id="addTransactionbtn" type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default NewTransaction;

