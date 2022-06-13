import Login from "../components/auth/Signin";
import HomePage from "../layout/home-page";
import CreatePhone from "../components/create-phone";
import CreateLaptop from "../components/create-laptop";
import NotFound from "../components/workspace/not-found";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";

export const publicRouter = [
    { path:"/404", component: NotFound, layout: null},
    { path:"/login", component: Login, layout: null},
    { path:"/", component: HomePage, layout: null},
    { path:"/signup", component: Signup, layout: null},
    { path:"/signin", component: Signin, layout: null},
    { path:"/create-phone", component: CreatePhone, layout: undefined},
    { path:"/create-laptop", component: CreateLaptop, layout: undefined}
]