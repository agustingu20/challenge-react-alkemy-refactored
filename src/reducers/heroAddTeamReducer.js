// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null, action) => {
    switch (action.type) {
        case "HERO_ADD_TEAM":
            return action.payload
        default:
            return state;
    }
};