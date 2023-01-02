import React from "react";
import ReactDOM  from "react-dom/client ";

const h1 = React.createElement("h1", { title: "h1" }, "Namaste react ");
const h2 = React.createElement("h2", { id: "h2" }, "Namaste react");
const h3 = React.createElement("h3", { className: "h3" }, "Namaste react");
const div = React.createElement("div", { id: "container" }, [h1, h2, h3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
