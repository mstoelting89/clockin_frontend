export const mutations = {
    SET_TOKEN (state, payload) {
        state.token = payload;
    },
    LOGGED_IN(state) {
        state.loggedIn = true
    },
    REGISTER (state) {
        state.register = true
    }
}