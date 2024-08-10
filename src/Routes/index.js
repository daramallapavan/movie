
import SearchPage from "../Pages/SearchPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home");
const { default: App } = require("../App");

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
                    path: "search",
                    element: <SearchPage/>
                }
                
            ]
        }
    ]
)

export default router