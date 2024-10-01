import React from 'react';

function Balance(){
  return (
  <div className="BalanceContainer">
    <div className="BC-Top">
      <h3>YOUR BALANCE</h3>
      <p>$205.00</p> 
    </div>
    <div className="BC-Bottom">
      <div className="BCB-Left">
        <h3>INCOME</h3>
        <p id="income">$ 1,150.00 </p>
      </div>
      <hr className="Seperator"></hr>
      <div className="BCB-Right">
        <h3>EXPENSE</h3>
        <p id="expense">$ 945.00 </p>
      </div>
    </div>

  </div>
  );
}

export default Balance;
