import React, { useState, useEffect } from 'react';


const Table = () => {
    const [round, setRound] = useState([]);
useEffect(()=>{
    fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json')
    .then(response => response.json())
    .then(data => setRound(data.rounds))
},[])

    const stats = {};




    const matches = [];
    round.map(match => match.matches.map(d => matches.push(d)))

    matches.map(function(score){
        if(score.score1>score.score2){
            if(!stats[score.team1.name]){
                stats[score.team1.name]={
                    'win':0,
                    'loss':0,
                    'draw':0
                }
            }else{
                stats[score.team1.name]['win']++;
            }
        }else if(score.score1===score.score2){
            if(!stats[score.team1.name]){
                stats[score.team1.name]={
                    'win':0,
                    'loss':0,
                    'draw':0
                }
            }else{
                stats[score.team1.name]['draw']++;
            }
        }else{
            if(!stats[score.team1.name]){
                stats[score.team1.name]={
                    'win':0,
                    'loss':0,
                    'draw':0
                }
            }else{
                stats[score.team1.name]['draw']++;
            }
        }
        
    })
    
    console.log(stats.name.win);

    return (
        <div>
            
        </div>
    );
};

export default Table;