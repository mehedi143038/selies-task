import React, { useState, useEffect } from 'react';


const Table = () => {
    const [round, setRound] = useState([]);
useEffect(()=>{
    fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json')
    .then(response => response.json())
    .then(data => setRound(data.rounds))
},[])

    const matches = [];
    round.map(match => match.matches.map(d => matches.push(d)))

    matches.map(score => console.log(score.date))

    return (
        <div>
            
        </div>
    );
};

export default Table;