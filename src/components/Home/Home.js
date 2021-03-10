import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './Home.css';
const Home = () => {
    const [sports, setSports] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=United%20States')
        .then(res=>res.json())
        .then(data=>setSports(data.countrys))
    }, [])
    return (
        <div className='home-container'>
             <div className='sport-container'>
             {
                sports.map(sport=><Leagues key={sport.idLeague} sport={sport}/>)
              }
             </div>
        </div>
    );
};

export default Home;