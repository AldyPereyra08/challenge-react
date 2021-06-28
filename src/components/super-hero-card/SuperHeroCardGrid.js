import React, { useState } from 'react';
import SuperHeroCard from './SuperHeroCard';

function SuperHeroCardGrid({heroData}) {

  const [heroTeam, setHeroTeam] = useState([]);

  const addHeroe = (heroData) => {

    console.log(heroData.id)

    setHeroTeam([...heroTeam, {
      id: heroData.id,
      name:"Catwoman",
      powerstats:{
         "intelligence":"69",
         "strength":"11",
         "speed":"33",
         "durability":"28",
         "power":"27",
         "combat":"85"
      },
      image:{
         url:"https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/659.jpg"
      }
    }])
  }



  console.log(heroTeam)
           
  return(
      <div className="row">
        {/* <h1>Team</h1>
        {heroTeam && heroTeam.map((superheroe, i) => (
          <div key={i} className="col-4">
            <SuperHeroCard name={superheroe.name} powerstats={superheroe.powerstats} image={superheroe.image}/>
          </div>
        ))} */}
        <h1>Resultado de Buesqueda</h1>
        {heroData && heroData.map((superheroe, i) => (
          <div key={i} className="col-4">
            <SuperHeroCard id={superheroe.id} name={superheroe.name} powerstats={superheroe.powerstats} image={superheroe.image} addHeroe={addHeroe}/>
          </div>
        ))}
          
      </div>

  );
}

export default SuperHeroCardGrid;