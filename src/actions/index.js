import axios from "axios"

export const fetchHero = (datos) => {
    return async function (dispatch) {
        const response = await axios.get(`search/${datos}`)
            .then((response) => dispatch({ type: "FETCH_HERO", payload: response.data.results }))
            .catch((error) => { return error })
        console.log("response-fetchHero", response)
    }
}

export const teamHero = (heroId) => {
    return async function (dispatch) {
        const response = await axios.get(`${heroId}`)
            .then((response) => {
                dispatch({ type: "HERO_ADD_TEAM", payload: response.data })
            })
            .catch((error) => { return error })
        console.log("response", response)
    }
}

export const teamPowerStats = (heroId) => {
    return async function (dispatch) {
        const response = await axios.get(`${heroId}`)
            .then((response) => {
                dispatch({ type: "TEAM_POWER_STATS", payload: response.data.powerstats })
            })
            .catch((error) => { return error })
        console.log("response-powerstats", response)
    }
}