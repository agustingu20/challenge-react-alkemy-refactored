import React from "react";

export default function HeroPowerstats({ hero }) {
  const {
    powerstats: { combat, durability, intelligence, power, speed, strength },
    id,
  } = hero;

  return (
    <div id={`hero-${id}`} className="attributes-box d-none">
      <p className="text-center pt-2 fw-bold">PowerStats</p>
      <div>
        <ul>
          <li>Combate: {combat}</li>
          <li>Durabilidad: {durability}</li>
          <li>Inteligencia: {intelligence}</li>
          <li>Poder: {power}</li>
          <li>Velocidad: {speed}</li>
          <li>Fuerza: {strength}</li>
        </ul>
      </div>
    </div>
  );
}
