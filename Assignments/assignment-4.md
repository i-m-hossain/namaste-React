Theory:

Q1. Is JSX mandatory for React?
    Ans: 
        JSX is not mandatory, but it is recommended as it has lots of advantages.

Q2. Is ES6 mandatory for React?
    Ans: 
        No, it is not mandatory

Q3. {TitleComponent()} vs <TitleComponent/> vs <TitleComponent><TitleComponent/>?
    Ans: 
        i. {TitleComponent()} is a way to use functional component inside another component, it is valid and can be used but not used generally
        ii. <TitleComponent/> is a fancy way and recommended to use inside anther component
        ii.  <TitleComponent><TitleComponent/>, this is another way to use a component. It provides additional feature like.. we can add children inside a component, later on that children can be passed as props inside parent component
Q4. How can i write comments in JSX?
    Ans:
        "{/* */}" , this is used to comment in jsx. use "CTRL + /" in vscode

Q5. What is <React.Fragment></React.Fragment> and <></>?
    Ans: 
        <React.Fragment></React.Fragment> is a wrapper to wrap multiple JSx tags whose don't need any additional wrapper like div, section etc.
        This provides flexibility in designing components and also ensure no layout breakes.
        <></>, is the short form of <React.Fragment></React.Fragment>

Q6. What is Virtual DOM?
    Ans: 
        Virtual DOM is the copy of real DOM which is saved in browser memory in the form of objects. Whenever a state is changed in the run time, corresponding node and its children in the virtual DOM gets re-rendered. This process gets done using diffing algorithm.

Q7. What is reconciliation?
    Ans: The algorithm React uses to diff one tree with another to determine which parts need to be changed.

Q8. What is React Fiber?
    Ans: 
    
        React Fiber is an ongoing reimplementation of React's core alogorithm. The goal is to add feautures including the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives. 

Q9. Why we need keys in React? When do we need it?
    Ans: 
        When same html tag is rendered in a react app, it get's confused while updating a specific node. Suppose  a root node has 4 elements and  a fifth one (same as previous node) gets added to the list, now react will get confused selecting the node to update. If we provide a key to that node, react gets to know about the updated node and quicky render only on that portion.  

Q10. Can we use index as key in React?
    Ans: 
        If there is unique key available, we must not use index. But incase if we dont have any unique id, we may use it

Q11. What are props in React?
    Ans: 
        Props are the properties, in other words arguments (for a functional component). They can be received as props (object).

Q12. What is Config Driven UI?
    Ans: 
        Config driven UI is a system design concept which tells us to configure the backend to send api responses in such a way that the response object has all the configuration to design frontend application. This ensures component reusability, effective conditional rendering and control over the application.