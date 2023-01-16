# Assignment-5 (Let's get hooked)

Q1. What is difference between Named export,Default export and * export ?
Ans: 
    **Named export**: 
        when we export a module without 'default' key, it is called Named export. we import named export with {}, curly braces
    **Default export**: 
        A module exported with default key, is called default export. while importing, We don't need to use curly braces and the module name can be changed
    *** * Export**:  
        It is another way to import our files. To import we need to use 'as' after '*'. eg: import * as A from "./directory' and use that like A.filename   

Q2. What is importance of config.js file?
Ans:
    In our application, we have lots of constants (strings, json etc.). By using config.json file, we can store all that constant values

Q3. What are React Hooks?
Ans: 
    React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects(useEffect). React provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful value and an updater function to update it.

Q4. Why do we need a useState hook ?
Ans: 
    We use useState hook to keep track of the states, we use in the component. React only tracks the states declared in useState hook and when the state get updated, the component get re-rendered and shows the updated state values on corresponding components.
