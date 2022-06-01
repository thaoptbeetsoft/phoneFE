import axios from "axios";
const API = "http://localhost:8080/api/auth";

class AuthService {
    signin(username: string, password: string) {
        const loginRequest ={
            username,
            password
        }
        return axios.post(API + "/signin", loginRequest)
            .then(response => {
                localStorage.setItem("user", JSON.stringify(response.data))
                return response.data;
            })
    }

    logout() {
        localStorage.removeItem("user")
    }

    signup(username: string, password: string, email: string) {
        const signUpRequest={
            username,
            password,
            email
        }
        return axios.post(API + "/signup", signUpRequest);
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}
export default new AuthService();