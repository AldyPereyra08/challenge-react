import React from 'react';
import './SuperHeroCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function SuperHeroCard({id, name, powerstats, image, addHeroe}) {
    // console.log(id)
    return(
        <div className="card super-hero-card">
            <h2 className="card-title title">{name}</h2>
            <img src={image.url} alt="Super Hero" className="card-img-top"/>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Inteligencia: {powerstats.combat}</li>
                <li className="list-group-item">Fuerza: {powerstats.durability}</li>
                <li className="list-group-item">Velocidad: {powerstats.intelligence}</li>
                <li className="list-group-item">Resistencia: {powerstats.power}</li>
                <li className="list-group-item">Poder: {powerstats.speed}</li>
                <li className="list-group-item">Combate: {powerstats.strength}</li>
            </ul>
            {/* <button className="btn" onClick={addHeroe}>Agregar</button> */}
            {/* <button className="btn btn-danger">Eliminar</button> */}
        </div>
    );
}

export default SuperHeroCard;