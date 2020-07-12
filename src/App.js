import React, { useState, useEffect } from 'react';
import './App.css';
import PointTable from './PointTable';
function App() {
  const [round, setRound] = useState([]);
useEffect(()=>{
    fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json')
    .then(response => response.json())
    .then(data => setRound(data))
},[])
  return (
    <div className="App">
      <h3 style={{color: "blue", marginBottom: "20px"}}>{round.name}</h3>
      <PointTable></PointTable>
    </div>
  );
}

export default App;
