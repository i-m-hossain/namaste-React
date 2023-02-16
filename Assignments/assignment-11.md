# Data is the new Oil

## What is prop drilling?
Ans: When we need to pass data from one component to another we send the data as props. Suppose, if the targeted data is inside more than one children, we have to pass the data via intermediate components. This scenario is known as props drilling.

## What is lifting the state up?
Ans: In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.

## What is Context Provider and Context Consumer?
Ans: React Context api allows us to store our data in a central place so that we can use those data in different places/ components in our application. To manipulate/update context store and it's position where it will sit and serve the data below it's children, we have to explicitly declare the context provider and provide a value. To use the context data, we may use Context consumer which is applicable for class component, useContext hook is used in functional component. 

## If you don’t pass a value to the provider does it take the default value?
Ans: No, it will throw error. Passing a value is mandatory in context provider




### topics covered:

- SPA layers: 
    i. Data layer (state, props, context api) 
    ii. UI Layer

- state vs props

- State lifting up

- Context API

- Building accordion component
