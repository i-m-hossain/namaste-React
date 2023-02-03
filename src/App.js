import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client ";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import * as Foo from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/ProfileClass";
import Wrapper from "./components/Wrapper";
import UserContext from "./context/UserContext";

// lazy loading
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Md Imran Hossain",
        email: "imran.kuet14@gmail.com",
    });
    return (
        <>
            <UserContext.Provider value={{ user: user, setUser: setUser }}>
                <Header />
                <Wrapper>
                    <Outlet />
                </Wrapper>

                <Foo.Footer />
            </UserContext.Provider>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>loading...</h1>}>
                        <About />
                    </Suspense>
                ),
                children: [
                    { path: "profile", element: <Profile name="imran" /> },
                ],
            },
            { path: "/", element: <Body /> },
            { path: "/restaurant/:resId", element: <RestaurantMenu /> },
            { path: "/contact", element: <Contact /> },
        ],
    },
    { path: "/login", element: <Login /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
