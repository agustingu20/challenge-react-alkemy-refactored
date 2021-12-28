import React, { useEffect } from "react";
import "../services/powerStats.css";

export default function TeamPowerStats({
  teamPowerstats,
  setMajorPowerStatName,
  setMajorPowerStatValue,
}) {
  const sumaPowerStats = [
    {
      name: "Inteligencia",
      value: teamPowerstats
        .map((item) => item?.intelligence)
        .reduce((prev, curr) => prev + (parseInt(curr) || 0), 0),
    },
    {
      name: "Poder",
      value:
        teamPowerstats
          .map((item) => item?.power)
          .reduce((prev, curr) => prev + (parseInt(curr) || 0), 0) || 0,
    },
    {
      name: "Combate",
      value:
        teamPowerstats
          .map((item) => item?.combat)
          .reduce((prev, curr) => prev + (parseInt(curr) || 0), 0) || 0,
    },
    {
      name: "Fuerza",
      value:
        teamPowerstats
          .map((item) => item?.strength)
          .reduce((prev, curr) => prev + (parseInt(curr) || 0), 0) || 0,
    },
    {
      name: "Velocidad",
      value:
        teamPowerstats
          .map((item) => item?.speed)
          .reduce((prev, curr) => prev + (parseInt(curr) || 0), 0) || 0,
    },
    {
      name: "Durabilidad",
      value:
        teamPowerstats
          .map((item) => item?.durability)
          .reduce((prev, curr) => prev + (parseInt(curr) || 0), 0) || 0,
    },
  ];

  let arraySumaPowerStatsOrdenado = sumaPowerStats.sort((a, b) => {
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    setMajorPowerStatName(arraySumaPowerStatsOrdenado[0].name);
    setMajorPowerStatValue(arraySumaPowerStatsOrdenado[0].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arraySumaPowerStatsOrdenado]);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {arraySumaPowerStatsOrdenado.map((suma) => (
        <div className="powerStatsWrapper">
          <p className="powerStatsName">{suma.name}</p>
          <p className="powerStatsValue">{suma.value}</p>
        </div>
      ))}
    </div>
  );
}
