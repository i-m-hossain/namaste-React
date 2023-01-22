# Assignment -- 1 (Inception)
Theory Assignment:
    ● - What is `EMMET`?
        - Emmet is a tool to write boiler plate code in much easier way. It improves writting HTML and CSS code which can be written on similiar to CSS type abbreviation. Emmet is installed by default in vscode. example: div#hello>h1.title*4+ul>li*4>$  
    ● Difference between a `Library and Framework`?
        - A framework provides everything to build an application including routing, apis, different rendering mechanism etc. It can be called that Framework is a superset of libraries, whereas a library can be a set of helper functions, modules for specific functionality.
    ● What is `CDN`? Why do we use it?
        - CDN's full form is Content Delivery Network. A content delivery network (CDN) is a group of servers spread out over a region or around the world that work together to speed up content delivery on the web. The servers in a CDN temporarily store (or cache) webpage content like images, HTML, JavaScript, and video. They send the cached content to users who load the webpage. Today, almost all websites and applications rely on a CDN to help serve content to their users.
    ● Why is `React known as React`?
        - Fundamentally, Reacts goal is to react/respond accordingly whenever the state changes. So whenever a function is invoked, an event is fired or any input's value change corresponding UI representation, corresponding state of data needs  to be changed. React solve this problem by taking states into consideration and react the UI accordingly using diffing approach on that specific node with the help of virtual DOM. Thus the name came into picture.  
    ● What is `crossorigin` in script tag?
        - The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
        CORS is used to manage cross-origin requests.
        CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.
    ● What is diference between `React and ReactDOM` ?
        - This are two different package which works together to render the html elements in the webpage. React package contains: React.createElement, React.createClass, React.Component, React.PropTypes, React.Children. On the other hand React DOM's responsibility is to render the react element/components to the dom. React DOM's equivalents are React native, React-three etc for different platforms which is only used once in index.html file to render the root element.
    ● What is difference between `react.development.js` and `react.production.js` files via `CDN`?
        - react.development.js is basically used for the develeopment purpose which dosn't have the minified version of javascipt codes, whereas react.production.js is the minified version and it is more optimized which is the reason it is used in production environment.
    ● What is `async and defer`?**
        - When an HTML file get execute HTML code is parsed untill it hits any script file. Based on the async or defer attribute this code parsing functionality happens in two ways
        1. For async attribute: The js code downloaded while HTML parsing and gets executed, whenever it gets downloaded fully. Thus it does not guarentee the order of the execution
        2. For defere attribute: The js code gets downloaded while HTML parsing. And only after the HTML parsing is completed the js file gets executed, thus it guarentees the order of the execution
