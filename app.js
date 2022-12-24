/* In js way 

const heading = document.createElement("h1");
heading.textContent = "hello everyone";
const rootDom = document.getElementById("root");
rootDom.appendChild(heading); 

*/

/*--------- IN REACT WAY------- */

const h1 = React.createElement("h1", {title:"h1"}, "Namaste react ");
const h2 = React.createElement("h2", {id:"h2"}, "Namaste react");
const h3 = React.createElement("h3", {class:"h3"}, "Namaste react");
const div = React.createElement("div", {id: "container"}, [h1, h2, h3]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
