import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Component/Greeting';

function App() {
  return (
    <div className="App">
      <Greeting name="Type Script" count={65} isAuth={false}/>
    </div>
  );
}

export default App;
