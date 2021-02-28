import logo from './logo.svg';
import './App.css';
import Table from '../src/components/Table';
import Data from "../src/components/Data"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Table App
      </header>
      {/* <Table/> */}
      <Data/>
    </div>
  );
}

export default App;
