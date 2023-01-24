# Finding the path (lesson-7)

## What are various ways to add images into our App? Explain with code examples
There are two ways to add images into our app.

1. using image url:
    ```
        <img src="image_url"/>
    ```

2. importing image in our component:

    ```
        import imageName from "./directory/imageName.extension"

        inside component:

        <img src={imageName}>
    ```


## What would happen if we do console.log(useState())?

Ans: useState returns two things. 
    1. state value 
    2. a setter function
    So consoling useState without any argument will return a value(undefined), and an empty setter function

## How will useEffect behave if we don't add a dependency array ?
Ans: useEffect will be rerendered at every state change.

## What is SPA?
Ans: SPA(single page application) is an application which is rendered in the client side. It loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

It allows users to use websites without loading whole new pages from the server, which can result in performance gains and a more dynamic experience, with some tradeoff disadvantages such as SEO, more effort required to maintain state, implement navigation, and do meaningful performance monitoring.


## What is difference between Client Side Routing and Server Side Routing?

On a webapp that uses server side routing:

- The browser detects that the user has clicked on an anchor element.

- It makes an HTTP GET request to the URL found in the href tag

- The server processes the request, and sends a new document (usually HTML) as a response.

- The browser discards the old webpage altogether, and displays the newly downloaded one.

- If the webapp uses client side routing:
...

The browser detects that the user has clicked on an anchor element, just like before.
- A client side code (usually the routing library) catches this event, detects that the URL is not an external link, and then prevents the browser from making the HTTP GET request.

- The routing library then manually changes the URL displayed in the browser (using the HTML5 history API, or maybe URL hashbangs on older browsers)

- The routing library then changes the state of the client app. For example, it can change the root React/Angular/etc component according to the route rules.

- The app (particularly the MVC library, like React) then processes state changes. It renders the new components, and if necessary, it requests new data from the server. But this time the response isn't necessarily an entire webpage, it may also be "raw" data, in which case the client-side code turns it into HTML elements.
