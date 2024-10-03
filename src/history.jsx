import React from 'react';

function History({ transactions }) {
  return (
    <div className="HistoryContainer">
      <h3>History</h3>
      <div className="HistoryTransactions">
        {transactions.map((transaction, index) => (
          <div key={index} className={`historyContainer ${transaction.amount > 0 ? 'hC1' : 'hC2'}`}>
            <span>{transaction.text}</span>
            <span>{transaction.amount > 0 ? `+$${transaction.amount.toFixed(2)}` : `-$${Math.abs(transaction.amount).toFixed(2)}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;



