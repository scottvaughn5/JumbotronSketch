import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from './Grid/Grid';

function App() {
  // const [getN, setN] = React.useState(5);

  return (
    <div className="App">
      {/* <div>
        <input type="number" value={getN} onChange={(e) => { setN(parseInt(e.target.value)) }} />
      </div> */}
      <Grid />
    </div>
  );
}

export default App;
