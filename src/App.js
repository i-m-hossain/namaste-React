import React from "react";
import ReactDOM from "react-dom/client ";
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import * as Foo from "./components/Footer";

const AppLayout = () => (
  <>
    <Header/>
    <Body/>
    <Foo.Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
