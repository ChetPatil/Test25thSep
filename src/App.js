import './App.css';
import Loginin from './Components/Login';
import NewReg from './Components/NewReg';

function App() {
  return (
    <div className="maincomp">
      <Loginin className="leftdiv" />
      <NewReg className="rightdiv" />
    </div>
  );
}

export default App;
