import React from "react";
import ReactDOM from "react-dom/client ";

const Title = () => <h1 id="title" key="title1">Namaste React</h1>;
const HeaderComponent = () => (
  <div>
    <Title />
    <h2> Namaste React functional component</h2>
    <h2> this is h2 tag</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
