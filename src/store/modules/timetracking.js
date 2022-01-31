import axios from 'axios'

const state = {

}

const mutations = {

}

const actions = {
    startTimeTracking() {
        const token = localStorage.getItem('token');

        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*",
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }

        return axios.get("http://localhost:8886/api/v1/login", header)
            .then((response) => {
                localStorage.setItem('token', response.data.token);
            });
    }
}

const getters = {

}

const timeTrackingModule = {
    state,
    mutations,
    actions,
    getters
}

export default timeTrackingModule;