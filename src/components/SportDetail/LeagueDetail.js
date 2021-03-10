
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
   const {strLeague,intFormedYear,strCountry,strSport,strDescriptionEN,strTwitter,strYoutube,strWebsite,strBadge,strBanner}=league
   let {strGender}=league
   console.log(league);
   useEffect(() => {
       fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
       .then(res=>res.json())
       .then(data=>setLeague(data.leagues[0]))
   }, [id])
   const divStyle={
        width: '100%',
        height:"auto",
        backgroundImage: `url(${strBanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundColor:'linear-gradient(0deg, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86))',
                                        }
    return (
             <div>
                 <div className='banner-area' style={divStyle}>
                    <div>
                    <img src={strBadge} alt=""/>
                    </div>
                 </div>
                <div className='league-container'> 
                    <div className='league-info'>
                    <h1>{strLeague}</h1>
                    <h4><FontAwesomeIcon icon={faPodcast}/> Founded: {intFormedYear}</h4>
                    <h4><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h4>
                    <h4><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h4>
                    <h4><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h4>

                    </div>
                    <div className='league-image'>
                    <img src={strGender==='Male'? male:female} alt=""/>
                    </div>
                    
                </div>
                <h3>{strDescriptionEN}</h3>
                <br/>
                <br/>
                <footer className='footer-area'>
                    <a href={`http://${strTwitter}`}><FaTwitter/></a> 
                    <a href={`http://${strYoutube}`}><FaYoutube/></a> 
                    <a href={`http://${strWebsite}`}><FaWeebly/></a>
                </footer>
             </div>       
        
    );
};

export default LeagueDetail;