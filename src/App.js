import React, { useState } from 'react';
import logo from './monkas300.png';
import './App.css';
import randomColor from 'randomcolor';

function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div className="App">
      <header style={{ backgroundColor: `${color}` }} className="App-header">
        {/* const [background-color, color] = useState(color());                 */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={function buttonListener() {
            setColor(randomColor());
          }}
        >
          Click to Random a Color!
        </button>
      </header>
    </div>
  );
}

export default App;
