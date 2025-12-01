import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout.jsx";
import Home from "../pages/Home/Home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
]);


export default router;