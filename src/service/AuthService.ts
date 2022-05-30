import axios from "axios";
import SignupForm from "../model/SignupForm";
const API = "http://localhost:8080/api/auth";

class AuthService {
    login(username: string, password: string) {
        return axios.post(API + "/signin", {username, password})
            .then(response => {
                    localStorage.setItem("user", JSON.stringify(response.data))
                return response.data;
            })
    }

    logout() {
        localStorage.removeItem("user")
    }

    signup(username: string, password: string, email: string) {
        return axios.post(API + "/signup", {username, password, email});
    }

    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}
export default new AuthService();