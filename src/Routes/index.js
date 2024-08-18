
import SearchPage from "../Pages/SearchPage";
import Details from "../Pages/Details";
import ExplorePage from "../Pages/ExplorePage"
import { createBrowserRouter }  from "react-router-dom";
import Home from "../Pages/Home"
import App  from "../App";
import LoginPage from "../Pages/LoginPage";
import SingUp from "../Pages/SingUp";



const router =createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    path: "",
                    element: <Home/>
                },
                {

                    path: ":explore",
                    element: <ExplorePage/>
                },
                {

                    path:":explore/:id",
                    element: <Details/>
                },
        
                {
                    path: "search",
                    element: <SearchPage/>
                },{
                    path:"login",
                    element: <LoginPage/>
                },{
                    path: "signup",
                    element: <SingUp/>
                }
                
            ]
        }
    ]
)

export default router