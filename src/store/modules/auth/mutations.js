export const mutations = {
    SET_TOKEN (state, token) {
        state.token = token;
    },
    LOGGED_IN(state) {
        state.loggedIn = true
    },
    REGISTER (state) {
        state.register = true
    }
}