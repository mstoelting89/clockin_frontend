import axios from 'axios'

const state = {
    token: null,
    register: false,
    loggedIn: false
}

const mutations = {
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

const actions = {
    testMethod() {
        console.log("Foo Bar");
    },
    register({ commit }, data) {

        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }

        commit('REGISTER');
        return axios.post("http://localhost:8886/api/v1/registration", data, header);
    },
    login({ commit }, data) {

        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }

        return axios.post("http://localhost:8886/api/v1/login", data, header)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                commit('SET_TOKEN', response.data.token);
                commit('LOGGED_IN')
            });

    },
    logout() {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            resolve();
        });
    },
    getDataFromSpring() {
        let token = localStorage.getItem('token');
        let data = {};

        axios.post("http://localhost:8886/api/v1/testendpoint", data, {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        })

    }
}

const getters = {
    token: state => state.token,
    register: state => state.register,
    loggedIn: state => state.loggedIn
}

const authModule = {
    state,
    mutations,
    actions,
    getters
}

export default authModule;