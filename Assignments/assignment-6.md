## chapter 06: Exploring the world

Q1: What is a Microservice? \
    Ans: Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams. The main feature is to decouple the independent applications. Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features. \
Q2: What is Monolith architecture? \
    Ans: Monolith architecture contains all the services inside one application which are tightly coupled. With monolithic architectures, all processes run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure. \
Q3: What is the difference between Monolith and Microservice? \
    Ans: The main difference between them is Microservice splits its services to other services and they are not tightly coupled. On the other hand Monolith Architecture is more like a container for all of its services and they are tightly coupled which means if one service gets failed all the services gets stopped. \
Q4: Why do we need a useEffect Hook? \
    Ans: useEffect hook deals with the side effects of an application like api call, dom manipulation, timer etc. useEffect hook can be thought like the life cycle methods. By using this hook, we can handle the application states, even after the component gets load in the dom. It is called after the component renders first time. By this hooks, we can re-render the component based on it's state change. \
Q5: What is Optional Chaining? \
    Ans: While accessing an objects properties, one of the property can be undefined or null. This can throw an error. To avoid error we use optional chaining which accesses the objects property or functions and instead of throwing error, it returns undefined which eventually prevent throwing errors in our application. \
Q6: What is Shimmer UI? \
    Ans: Shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load. \
Q7: What is the difference between JS expression and JS statement? \
    Ans: JS expression is a bit of JavaScript code that produces a value. on the other hand, statement is an instruction for the computer to do something. Statements often have slots where we can put expressions. For example, a function can not accept an if statement as its parameter, but it can accept ternary operator as its parameter. \
Q8: What is Conditional Rendering, explain with a code example \
    Ans: Conditional rendering means rendering a component based on its state or props value. \
    Example:
    `
        function Greeting(props) {
            const isLoggedIn = props.isLoggedIn;
            if (isLoggedIn) {
                return <UserGreeting />;
            }
            return <GuestGreeting />;
        }
    ` \
Q9: What is CORS? \
    Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. 
Q10: What is async and await? \
    Ans: Async await is used to handle promises. Generally a promise (fetch, timeout, custom promises) returns either resolve or reject and the code execution is not synchronous. To execute this asynchronous functions, we use async and await. The async function declaration declares an async function where the await keyword is permitted within the function body. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains. \

Q11: What is the use of const json = await data.json(); in getRestaurants() \
    Ans: The response we got from the fetch api gives us the response stream. This response stream needs to be read and convert into javascript object. This data.json() method returns a promise and which resolves with the result of parsing the body text as json. despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object. 
