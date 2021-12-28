import React from "react";

export default function HeroPowerstats({ hero }) {
  return (
    <div id={`hero-${hero.id}`} className="attributes-box d-none">
      <p className="text-center pt-2 fw-bold">PowerStats</p>
      <div>
        <ul>
          <li>Combate: {hero.powerstats.combat}</li>
          <li>Durabilidad: {hero.powerstats.durability}</li>
          <li>Inteligencia: {hero.powerstats.intelligence}</li>
          <li>Poder: {hero.powerstats.power}</li>
          <li>Velocidad: {hero.powerstats.speed}</li>
          <li>Fuerza: {hero.powerstats.power}</li>
        </ul>
      </div>
    </div>
  );
}
