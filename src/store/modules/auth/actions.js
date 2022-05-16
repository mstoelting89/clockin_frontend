import auth from "@/services/auth";
import router from "@/router";

export const actions = {
    setLoggedIn( { commit }) {
        commit('LOGGED_IN');
    },
    login({ commit }, data) {
        // TODO: Test to implement a return
        auth.login(data)
            .then((response) => {
                const userRoles = [];
                response.data.role.forEach((role) => {
                    userRoles.push(role.authority);
                });

                localStorage.setItem('userRole', userRoles);
                localStorage.setItem('token', response.data.token);
                commit('SET_TOKEN', response.data.token);
                commit('LOGGED_IN');
                router.push('/user/timetracking');

            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.status);
                }
            })
    },
    logout() {
        return new Promise((resolve) => {
            localStorage.removeItem('token');
            localStorage.removeItem('user_role');
            resolve();
        });
    }
}