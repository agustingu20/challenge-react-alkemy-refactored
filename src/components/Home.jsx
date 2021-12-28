import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import SearchForm from "../components/SearchForm";
import "../services/home.css";
import SuperheroCard from "./SuperheroCard";
import TeamHero from "./TeamHero";
import { PixelSpinner } from "react-epic-spinners";
import TeamPowerStats from "./TeamPowerStats";

export default function Home({
  setTeam,
  team,
  deleteHero,
  setTeamPowerstats,
  teamPowerstats,
  setMajorPowerStatName,
  majorPowerStatName,
  setMajorPowerStatValue,
  majorPowerStatValue,
  heroesQuota,
  setHeroesQuota,
}) {
  const [isNull, setIsNull] = useState(true);
  const [isLoading, setLoad] = useState(false);

  const history = useHistory();

  const hero = useSelector((store) => store.hero);

  if (!localStorage.getItem("token")) {
    history.push("/login");
  }

  useEffect(() => {
    const isTeamNull = () => {
      if (team === null || team === []) {
        setIsNull(false);
      } else {
        setIsNull(true);
      }
    };
    isTeamNull();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-component">
      <SearchForm setLoad={setLoad} />
      <div className="d-grid justify-content-center">
        <div className="d-flex justify-content-center mt-4">
          {!hero && isLoading ? (
            <PixelSpinner color="red" variant="dark" animation="border" />
          ) : (
            <div className="wrapper">
              {hero &&
                hero.map((hero) => (
                  <SuperheroCard
                    key={`hero-${hero.id}`}
                    hero={hero}
                    team={team}
                    setTeam={setTeam}
                    setIsNull={setIsNull}
                    setTeamPowerstats={setTeamPowerstats}
                    setHeroesQuota={setHeroesQuota}
                    heroesQuota={heroesQuota}
                  />
                ))}
            </div>
          )}
        </div>
        <div>
          <div>
            {isNull === false && teamPowerstats.length !== 0 && (
              <div>
                <div className="d-flex justify-content-center">
                  <p className="text-center team-title">Equipo</p>
                  <p className="team-major-stat">
                    {majorPowerStatName}: {majorPowerStatValue}
                  </p>
                </div>
                <TeamPowerStats
                  setMajorPowerStatValue={setMajorPowerStatValue}
                  setMajorPowerStatName={setMajorPowerStatName}
                  teamPowerstats={teamPowerstats}
                  className="mx-2"
                />
              </div>
            )}
          </div>
        </div>
        <div className="wrapper">
          {isNull === false &&
            team.map((team) => (
              <div>
                <TeamHero
                  key={`team-${team?.id}`}
                  team={team}
                  deleteHero={deleteHero}
                  className="mx-2"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
