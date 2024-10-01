import React from 'react';

function History(){
  return (
    <div className="HistoryContainer">
      <h3>History</h3>
      <div className="HistoryTransactions">
        <div id="hC1" className="historyContainer">
          <span>salary</span>
          <span>+$1,150.00</span>
        </div>
        <div id="hC2" className="historyContainer">
          <span>bills</span>
          <span>-$95.00</span>          
        </div>
        <div id="hC3" className="historyContainer">
          <span>rent</span>
          <span>-$850.00</span>            
        </div>

      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default History;
