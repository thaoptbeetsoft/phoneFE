import axios from "axios";
// import User from "./model/User";
// let userStr: any;
// userStr = localStorage.getItem("user");
// let user: User;
//  user = JSON.parse(userStr);
export default axios.create({
  baseURL: "http://localhost:8080/api"
  // headers: {
  //   "Authorization" : `Bearer ${user.accessToken}`
  // }
});