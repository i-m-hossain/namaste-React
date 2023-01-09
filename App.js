import React from "react";
import ReactDOM from "react-dom/client ";

const h1 = React.createElement("h1", { title: "h1" }, "Namaste react ");
const h2 = React.createElement("h2", { id: "h2" }, "Namaste react");
const h3 = React.createElement("h3", { className: "h3" }, "Namaste react");
// const div = React.createElement("div", { id: "container" }, [h1, h2, h3]);
const  container = <div>
    <h1>Namaste react 1</h1>
    <h1>Namaste react 2</h1>
    <h1>Namaste react 3</h1>

</div>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
