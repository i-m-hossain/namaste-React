## Let's Get Classy(assignment-8)

# How do you create nested Routes react-router-dom configuration?
Ans: First, we need to use children key in the parent and the children should be an array. Inside the children, we can specify the nested routes. To display the nested routes element, we need to use <Outlet/> component. E.g.
    
    ```
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/restaurant/:id", element: <RestaurantMenu /> },
            {
                path: "/about",
                element: <About name="imran"/>,
                children: [
                    { path: "profile", element: <Profile  name="imran" /> 
                }],
            },
            { path: "/contact", element: <Contact/> },
        ],
    },
    ```


# What is order of the life cycle method call in class based components?
Ans: The life cycle method order in class based components are:

    1.  constructor
    
    2.  render

    <!-- now the dom is mounted -->

    3.  componentDidMount

    <!-- after this the state will be modified and the component will be rerendered again -->
    
    4.  render

    5. componentDidUpdate

    6. componentWillUnmount (before the component will be destroyed from the page)


# Why do we use componentDidMount?
Ans: componentDidMount is a life cycle which gets called after the first render of a component. So by that time (after the first render), the dom gets mounted. Now we can update the UI from external api's(fetch) or perform certain DOM event. Using the componentDidMount life cycle, we deal with the sideEffects of our application.

# Why do we use componentWillUnmount? show with example  
Ans: Some times we need to perform cleaning operation in our component like clear time out, clear interval etc. This type of operation need to be performed when the component gets unmounted or our application may crash. As SPA always runs processes in the background,  those operation doesn't get destroyed automatically when the component gets unmounted, So we use the life cycle method "componentWillUnmount" to perform those cleaning operation.

```
    componentDidMount() {
        this.interval = setInterval(() => {
            console.log("hello")
        }, 1000);
        console.log("componentDidMount parent ");
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
```
# Why do we use super (props) in constructor?
Ans: super (props) in the constructor makes the props available to use inside the child component.

# (Research) Why can't we have the callback function of useEffect async? 
Ans: useEffect only expects a function to return which is used for clean-up. using async the callback function returns a promise which is a violation of its functionality. That's why we can't have the callback function as async but we can use the async operation inside the callback function and call that immediately to serve our purpose.

```
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await MyAPI.getData(someId);
            // ...
        }
        fetchData();
    }, [someId]); 

```
# Read abt createHashRouter, createMemoryRouter from React Router docs.



<!-- Links -->

1.https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/






### Topic covered:

- this.props 

- this.state

- super(props) inside constructor

- this.setState({count: this.count+1})

- React lifecycle order

    - constructor --> render --> componentDidMount(best place for an api call) --> 

    - initial render --> useEffect 
                     
                    1. no dependency array, will be called useEffect every time
                    
                    2. [], empty dependency array, will be called useEffect for the first time only
                    
                    3. [state1, state2], useEffect will be called whenever `state1` & `state2`gets changed

- parent child method calling order
    
    1. parent - constructor
    
    2. parent - render method
    
    3.      First child - constructor
    
    4.      First child - render method 
    
    5.      Second child - constructor
    
    6.      Second child - render method 
            <!-- dom is updated for children -->
    
    7.      First child - didComponentMount 
    
    8.      Second child - didComponentMount 
    
    9. parent didComponentMount
    
    10. But if any asynchronous function is called in child then componentDidMount will executes parents  synchronous functions.

- WHEN REACT RENDERS A COMPONENT, IT HAPPENS IN TWO PHASE:
    
    1. RENDER PHASE - `constructor` and `render` method is called
    
    2. COMMIT PHASE - updating the DOM(`componentDidMount`)


    render(constructor, render)-> update(component did mount, set State) -> render(re render)