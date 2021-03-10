
import { faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { FaTwitter, FaWeebly, FaYoutube } from 'react-icons/fa';
import { useParams } from 'react-router';
import female from '../Image/female.png';
import male from '../Image/male.png';
import './LeagueDetail.css';
const LeagueDetail = () => {
   const {id}=useParams()
   const [league, setLeague] = useState({})
   const {strLeague,intFormedYear,strCountry,strSport,strDescriptionEN,strTwitter,strYoutube,strWebsite}=league
   let {strGender}=league
   console.log(league);
   useEffect(() => {
       fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
       .then(res=>res.json())
       .then(data=>setLeague(data.leagues[0]))
   }, [id])
    return (
             <div>
                <div className='league-container'> 
                    <div className='league-info'>
                    <h1>{strLeague}</h1>
                    <h4><FontAwesomeIcon icon={faPodcast}/> Founded: {intFormedYear}</h4>
                    <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                    <h4><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h4>
                    <h4><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>

                    </div>
                    <div className='league-image'>
                    <img src={strGender=='Male'? male:female} alt=""/>
                    </div>
                    
                </div>
                <h3>{strDescriptionEN}</h3>
                <br/>
                <br/>
                <footer>
                    <a href={strTwitter}><FaTwitter/></a> 
                    <a href={strYoutube}><FaYoutube/></a> 
                    <a href={strWebsite}><FaWeebly/></a>
                </footer>
             </div>       
        
    );
};

export default LeagueDetail;