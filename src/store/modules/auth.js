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
    },
    getDataFromSpring() {
        let token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaWNoYWVsc3RvZWx0aW5nQGdtYWlsLmNvbSIsImV4cCI6MTY0OTI1MDI3NSwiaWF0IjoxNjQzMjAyMjc1fQ.XixG2APpHocgXtuzUrFOyvikI7cooiIBQKiKmrX0kkHzNwnG4VcHLR_iVkne1nROf1C1CEuU-fgAaSDkaYjUNw";
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

}

const authModule = {
    state,
    mutations,
    actions,
    getters
}

export default authModule;