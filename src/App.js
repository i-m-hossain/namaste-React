import React, { lazy, Suspense } from "react";
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

// lazy loading
const About = lazy(() => import("./components/About"));

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
