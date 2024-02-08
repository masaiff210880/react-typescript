import React from 'react';
import './App.css';
import Greeting from './Component/Greeting';
import Person from './Component/Person';
import PersonList from './Component/PersonList';

function App() {
  const personName = {
    first : "Type",
    last : "Script"
  }
  const personList = [
    {first:"Ram",last:"Surat",age:22},
    {first:"Suraj",last:"Kumar",age:22},
    {first:"Mukchund",last:"Prajapati",age:22}
  ]
  return (
    <div className="App">
      <Greeting name="Type Script" count={65} isAuth={false}/>
      <Person name={personName}/>
      <PersonList name={personList}/>
    </div>
  );
}

export default App;
