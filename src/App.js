import logo from './logo.svg';
import Balance from './balance.jsx'; 
import History from './history.jsx';
import NewTransaction from './newTranscations.jsx';
import './balance.css';

function App() {
  return (
   <div className="MainContainer">
      <Balance/>
      <History/>
      <NewTransaction/>
  </div> 
);
}

export default App;
