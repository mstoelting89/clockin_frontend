import axios from "axios";

export default {
    register(data) {
        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*",
        }

        return axios.post("http://localhost:8886/api/v1/registration", data, header);
    },
    login(data) {
        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*",
        }

        return axios.post("http://localhost:8886/api/v1/login", data, header);
    },
    forgotPassword(data) {
        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*",
        }

        // email erstellt token, der die Email beinhaltet. Dieser wird als GET Parameter in die Confirm Mail gepackt [x]
        // Dieser Link zielt auf die vue forgot password seite. Wenn GET Parameter vorhanden ist, dann zeig die Password ändern felder an [x]
        // Der Button verweist auf einen Endpoint der den Token entgegen nimmt, überprüft und die mail extrahiert, sowie das neue Passwort setzt

        return axios.get("http://localhost:8886/api/v1/login/forgotpassword?email=" + data, {headers: header})
            .then((response) => {
                console.log(response);
            })
    },
    passwordReset(token, password) {
        const header = {
            "Content-Type": "application/json",
            "Accept": "*/*",
        }

        const data = {
            'token': token,
            'password': password
        }

        return axios.post("http://localhost:8886/api/v1/login/resetpassword", data, header)
            .then((response) => {
                console.log(response);
            });
    }
}