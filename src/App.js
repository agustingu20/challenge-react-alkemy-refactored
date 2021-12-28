import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import "./services/home.css"

const localToken = JSON.parse(localStorage.getItem("token"))?.token || "";

function App() {
  const [token, setToken] = useState(localToken)
  const [team, setTeam] = useState([])

  const [teamPowerstats, setTeamPowerstats] = useState([])

  const [majorPowerStatName, setMajorPowerStatName] = useState([]);
  const [majorPowerStatValue, setMajorPowerStatValue] = useState([]);

  const heroTeam = useSelector((store) => store.teamHero)
  const heroPowerstats = useSelector((store) => store.teamPowerStats)

  const [heroesQuota, setHeroesQuota] = useState({
    goodHeroes: 0,
    badHeroes: 0
  })

  useEffect(
    () => {
      const addTeam = () => {
        const teamFilter = team.filter(team => team !== null)
        const teamFilterPowerstats = teamPowerstats.filter(team => team !== null)
        setTeam([...teamFilter, heroTeam])
        setTeamPowerstats([...teamFilterPowerstats, heroPowerstats])
      }
      addTeam()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heroTeam]
  )

  const deleteHero = (event) => {
    event.preventDefault();
    const teamFiltered = team.filter(
      (teammate) => teammate.id !== event.target.value
    );
    // eslint-disable-next-line no-unused-vars
    const teamPowerStatsFiltered = teamPowerstats.pop();
    setTeam(teamFiltered);
  };

  const logOut = () => {
    localStorage.removeItem("token")
    setToken("")
  }

  return (
    <div className="index-component text-home">
      <Router>
        <NavBar logOut={logOut} token={token} />
        <Switch>
          <Route path="/login" exact >
            <Login setToken={setToken} />
          </Route>
          <Route path="/" exact >
            <Home
              token={token}
              setTeam={setTeam}
              team={team}
              deleteHero={deleteHero}
              setTeamPowerstats={setTeamPowerstats}
              teamPowerstats={teamPowerstats}
              setMajorPowerStatName={setMajorPowerStatName}
              setMajorPowerStatValue={setMajorPowerStatValue}
              majorPowerStatName={majorPowerStatName}
              majorPowerStatValue={majorPowerStatValue}
              setHeroesQuota={setHeroesQuota}
              heroesQuota={heroesQuota}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
