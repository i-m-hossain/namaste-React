# Assignent--2(Laying foundation)
Theory Assignment:
    ● - What is `JSx`?
        Ans: It is an extension of javascript that allows allows us to write html like syntax in our javascript code. This code is transpiled by bable and converted into React.createElement. Which is further converted into DOM 
    ● - Super powers of JSX
        Ans: 
            i. Allows us to write HTML like syntax
            ii. Converts into React.createElement
            iii. Do sanitization to prevent XSS attack
            iv. Allows us to write javascript code inside jsx
            
    ● - Role of type attribute in script tag? what options can we use there?
        Ans: The HTML <script> type Attribute is used to specify the MIME type of script and identify the content of the Tag. It has a Default value which is “text/javascript”.

        Options we can use: 
            i. text/javascript (this is default)
            ii. text/ecmascript
            iii. application/ecmascript
            iv. application/javascript
    ● - {titleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} ?
        Ans: titleComponent ~ is a React Element
            <TitleComponent/> and <TitleComponent></TitleComponent> ~ both are React component. First one is used when no the componenent doesn't have any children;

Coding Assignment:
    ● - Create a nested header element using React.createElement(h1, h2, h3 inside a div with class title)
        ● - create the same element using `JSX`
        ● - create a functional component  of the same with `JSX`?
        ● - pass attributes into the tag  in JSX
        ● - `composition` of component(Add a component inside another) 
        ● - {titleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} ? 

    ● - Create a header component from scratch using functional component
        ● - Add a logo in the left
        ● - Add a search bar in the middle
        ● - Add a user icon on the right
        ● - Add css to look it nice

References:
    1. https://babeljs.io/
    2. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
    3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
    4. https://babeljs.io/repl#
    5. https://reactjs.org/docs/react-without-jsx.html