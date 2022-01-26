import axios from 'axios'

const state = {

}

const mutations = {

}

const actions = {
    testMethod() {
        console.log("Foo Bar");
    },
    register() {
        const data = {
            "firstName": "Test",
            "lastName": "Tester",
            "email": "test.tester@test.de",
            "password": "password"
        }

        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }

        axios.post("http://localhost:8886/api/v1/registration", data, header);
    },
    login() {
        const data = {
            "email": "michaelstoelting@gmail.com",
            "password": "Test1234"
        }

        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }

        axios.post("http://localhost:8886/api/v1/login", data, header);
    }
}

const getters = {

}

const authModule = {
    state,
    mutations,
    actions,
    getters
}

export default authModule;