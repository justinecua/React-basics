import React from 'react';

function Balance({ transactions }) {

  let total = 0;
  let totalExpense = 0;
  let totalIncome = 0;
  for (const transaction of transactions) {
    total += transaction.amount; 
  }

  for (const transaction of transactions) {
    if (transaction.amount > 0) {
      totalIncome += transaction.amount; 
    }
  }

  for (const transaction of transactions) {
    if (transaction.amount < 0) {
      totalExpense += -transaction.amount; 
    }
  }

  return (
    <div className="BalanceContainer">
      <div className="BC-Top">
        <h3>YOUR BALANCE</h3>
        <p>${total.toFixed(2)}</p>
      </div>
      <div className="BC-Bottom">
        <div className="BCB-Left">
          <h3>INCOME</h3>
          <p id="income">${totalIncome.toFixed(2)}</p> 
        </div>
        <hr className="Seperator" />
        <div className="BCB-Right">
          <h3>EXPENSE</h3>
          <p id="expense">${totalExpense.toFixed(2)}</p>         
        </div>
      </div>
    </div>
  );
}

export default Balance;





