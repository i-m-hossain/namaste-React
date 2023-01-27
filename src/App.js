import React from "react";
import ReactDOM from "react-dom/client ";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import * as Foo from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/ProfileClass";


const AppLayout = () => (
    <>
        <Header />
        <Outlet />
        <Foo.Footer />
    </>
);
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/restaurant/:id", element: <RestaurantMenu /> },
            {
                path: "/about",
                element: <About name="imran"/>,
                children: [
                    { path: "profile", element: <Profile  name="imran" /> 
                }],
            },
            { path: "/contact", element: <Contact/> },
        ],
    },
    { path: "/login", element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
