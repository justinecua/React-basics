import React from 'react';

function NewTransactions(){
  return(
  <div className="TransactionContainer">
    <h3>Add New Transaction</h3>
    
    <div className="transactionInputs">
      <label for="salary">Expense Category</label>
      <input id="salary" name="salary" placeholder="Add Category"></input>
    </div>
    <div className="transactionInputs">
      <label for="salary">Amount</label>
      <p>(negative - expensive, positive - income)</p>
      <input id="salary" name="salary" placeholder="Add Amount"></input>
    </div>
    
    <button id="addTransactionbtn" type="">Add Transaction</button>
  </div>
  );
}

export default NewTransactions;
