import React from "react";
import ReactDOM from "react-dom/client ";
import "./index.css";

/*-- Create a nested header element using React.createElement(h1, h2, h3 inside a div with class title) ---*/
const heading1 = React.createElement("h1", { id: "h1", key: "h1" }, "heading1");
const heading2 = React.createElement("h2", { id: "h2", key: "h2" }, "heading2");
const heading3 = React.createElement("h1", { id: "h3", key: "h3" }, "heading3");
const container = React.createElement("div", { className: "title" }, [
  heading1,
  heading2,
  heading3,
]);

/*
 ** create the same element using `JSX`
 ** pass attributes into the tag  in JSX
 */
const containerWithJSX = (
  <div className="title">
    <h1 id="h1">heading 1</h1>
    <h2 id="h2">heading 2</h2>
    <h3 id="h3">heading 3</h3>
  </div>
);

/*
 ** create a functional component  of the same with `JSX`?
 ** `composition` of component(Add a component inside another)
 */
const Headers = () => (
  <div className="title">
    <h1 id="h1">heading 1</h1>
    <h2 id="h2">heading 2</h2>
    <h3 id="h3">heading 3</h3>
  </div>
);
const Container = () => <Headers />;
/* ----{titleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} ?---- */

const titleComponent = <h1>It is an element </h1>
const TitleComponent  = ()=> <div>{titleComponent}</div>

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<TitleComponent />);
root.render(<TitleComponent></TitleComponent> );

<div>
  <h1></h1>
  <h2></h2>
  <h3></h3>
</div>;
