import Login from "../components/auth/Signin";
import HomePage from "../layout/home-page";
import CartLayout from "../components/cart-layout";
import NotFound from "../components/workspace/not-found";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";

// export const publicRouter = [    layout cũ
//     { path:"/add", component: AddPhone, layout: undefined},
//     { path:"/404", component: NotFound, layout: null},
//     { path:"/", component: ListPhone, layout: undefined},
//     { path:"/list", component: ListPhone, layout: undefined},
//     { path:"/update", component: UpdatePhone, layout: undefined},
//     { path:"/delete", component: DeletePhone, layout: undefined},
//     { path:"/login", component: Login, layout: null},
//     { path:"/workspace", component: Workspace, layout: null},
//     { path:"/chart", component: Chart, layout: null},
//     { path:"/login-page", component: LoginPage, layout: null},
//     { path:"/home-page", component: HomePage, layout: null},
//     { path:"/game", component: Snake, layout: null}
// ]
export const publicRouter = [
    { path:"/404", component: NotFound, layout: null},
    { path:"/login", component: Login, layout: null},
    { path:"/", component: HomePage, layout: null},
    { path:"/signup", component: Signup, layout: null},
    { path:"/signin", component: Signin, layout: null},
    { path:"/cart-page", component: CartLayout, layout: undefined}
]