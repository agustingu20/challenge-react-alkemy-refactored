import { combineReducers } from "redux";
import heroAddTeamReducer from "./heroAddTeamReducer";
import heroReducer from "./heroReducer"
import teamPowerStatsReducer from "./teamPowerStatsReducer";


export default combineReducers({
    hero: heroReducer,
    teamHero: heroAddTeamReducer,
    teamPowerStats: teamPowerStatsReducer
})