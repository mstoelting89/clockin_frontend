import axios from "axios";

export const actions = {
    startTimeTracking({ commit, dispatch }) {
        const token = localStorage.getItem('token');

        const header = {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }

        return axios.get("http://localhost:8886/api/v1/timetrack/start", {
            headers: header
        }).then((response) => {
            commit('CURRENT_TIME_TRACKING_ID', response.data.id);
            dispatch('getTimeTracking');
        });
    },
    endTimeTracking({ commit, dispatch }, data) {
        const token = localStorage.getItem('token');

        const header = {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }

        return axios.post("http://localhost:8886/api/v1/timetrack/end", data, {
            headers: header
        }).then(() => {
            commit('CURRENT_TIME_TRACKING_ID', '');
            dispatch('getTimeTracking');
        });
    },
    getTimeTracking({ commit }) {
        const token = localStorage.getItem('token');

        const header = {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${token}`,
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }

        return axios.get("http://localhost:8886/api/v1/timetrack/get", {
            headers: header
        }).then((response) => {

            const timeData = [];

            response.data.forEach((value) => {

                const timeItem = {
                    'start': new Date(value.start),
                    'end': new Date(value.end),
                    'id': value.id
                }

                timeData.push(timeItem);
            });

            commit('UPDATE_TIME_TRACKING', timeData);
        });
    }
}