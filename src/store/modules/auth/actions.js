import axios from "axios";

export const actions = {
    setLoggedIn( { commit }) {
        commit('LOGGED_IN');
    },
    register({ commit }, data) {

        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*",
        }

        commit('REGISTER');
        return axios.post("http://localhost:8886/api/v1/registration", data, header);
    },
    login({ commit }, data) {

        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*",
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

        const header = {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }

        axios.post("http://localhost:8886/api/v1/testendpoint", data, {
            headers: header
        });
    },
    getGetDataFromSpring() {
        let token = localStorage.getItem('token');

        const header = {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }

        axios.get("http://localhost:8886/api/v1/testGet", {
            headers: header
        });
    }
}