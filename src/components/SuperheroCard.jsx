import React, { useState } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
import "../services/superHeroCard.css";
import "animate.css";
import HeroPowerstats from "./HeroPowerstats";
import { useDispatch } from "react-redux";
import { teamHero, teamPowerStats } from "../actions";
import { useEffect } from "react";
import swal from "sweetalert";

export default function SuperheroCard({
  hero,
  setTeam,
  setIsNull,
  setTeamPowerstats,
  team,
  setHeroesQuota,
  heroesQuota,
}) {
  const dispatch = useDispatch();

  const {
    biography: { alignment },
    id,
    image: { url },
    name,
  } = hero;

  const defineHeroesQuota = (team) => {
    let goodTeammates = 0;
    let badTeammates = 0;

    for (const teammate of team) {
      if (teammate?.biography.alignment === "good") {
        goodTeammates = ++goodTeammates;
      } else {
        badTeammates = ++badTeammates;
      }
    }
    setHeroesQuota({ goodHeroes: goodTeammates, badHeroes: badTeammates });
  };

  const handleClick = (event) => {
    const heroId = event.target.value;
    if (team.length < 6) {
      const repeatedHeroes = team.find((teammate) => teammate?.id === heroId);
      if (!repeatedHeroes) {
        if (heroesQuota.goodHeroes < 3 || heroesQuota.badHeroes < 3) {
          dispatch(teamPowerStats(heroId, setTeamPowerstats));
          dispatch(teamHero(heroId, setTeam));
          setIsNull(false);
        }
      }
    } else {
      swal({
        icon: "warning",
        title: "No se pueden agregar más héroes",
      });
    }
  };

  const cambiarClase = () => {
    const div = document.querySelector(`#hero-${id}`);
    div.classList.toggle("d-none");
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    defineHeroesQuota(team);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team]);

  return (
    <div id="prueba" className="contenedor-heroes">
      <Card
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="card-style"
        key={`hero-${id}`}
      >
        <Collapse in={open}>
          <div id="example-collapse-text">
            <Card.Img variant="top" src={url} />
            <HeroPowerstats hero={hero} />
          </div>
        </Collapse>
        <Card.Body className="p-1">
          <div>
            <Card.Title className="card-title">{name}</Card.Title>
            <div className="d-flex justify-content-start mb-1">
              {alignment === "bad" ? (
                <Card.Title className="card-title-btn-bad">
                  {alignment}
                </Card.Title>
              ) : (
                alignment === "good" && (
                  <Card.Title className="card-title-btn-good">
                    {alignment}
                  </Card.Title>
                )
              )}
              {alignment === "neutral" && (
                <Card.Title className="card-title-btn-neutral">
                  {alignment}
                </Card.Title>
              )}
              {open && (
                <Button
                  variant="warning"
                  className="btn btn-sm attributes-btn"
                  onClick={cambiarClase}
                >
                  Atributos
                </Button>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="btn btn-sm m-1"
              value={id}
              onClick={handleClick}
            >
              Añadir al equipo
            </Button>
            <Button
              variant="dark"
              className="btn btn-sm m-1"
              onClick={() => setOpen(!open)}
            >
              {!open ? "Ver +" : "Ver -"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
