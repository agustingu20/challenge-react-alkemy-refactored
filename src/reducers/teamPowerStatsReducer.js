// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
    switch (action.type) {
        case "TEAM_POWER_STATS":
            return action.payload;
        default:
            return state;
    }
};