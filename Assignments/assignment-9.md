## Assignment-9 (Optimizing our app)

# 1. When and why do we need lazy()?
Ans: When we want to make a separate chunk of a component during bundling, we use `lazy()` function. This function takes a component as parameter in the callback function. This lazy() function splits the code from the bundler and make a separate  chunk which enables a large scale application with less render time and more optimized. 

# What is suspense?
Ans: The `lazy()` function is an asynchronous operation which returns a promise. That's why during the render React may not find the component to render, so it will suspend the component rendering. To render the lazy loaded component, React provides us a component which is `<Suspense></Suspense>`. We can pass the lazy loaded component as child inside suspense component. It also has a prop named `fallback` which is responsible for showing the loading component until the lazy loaded component gets mounted   

# Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?
Ans: if we don't use suspense component for lazy loading, React doesn't get anything to render. That is why the component gets suspended. As lazy loading returns a promise the component needs to get rendered asynchronously. `Suspend` component from React  can catch Promise from children and render fallback until the promise is resolved. Thus the error gets fixed. 
# Advantages and disadvantages of using this code splitting pattern?
Ans: 
Advantages:
    
    1. it allows splitting of code into various bundles or components or chunks which can then be loaded on demand or in parallel.

    2. As the code loaded only on demand, it enables improving performance. While the total amount of code is the same (and perhaps even a few bytes larger), the amount of code needed on demand can be reduced.

Disadvantages:
    
    1. Code splitting is suitable for large scale application where the total bundle size is too large and requires optimization, if not the case for small application it becomes an overhead like unnecessary lazy loading, running additional functions and setting additional configuration etc. 

# When do we and why do we need suspense?
Ans: `suspense` is a component provided by React to deal with lazy loading. If we use lazy loading to dynamically import components, it returns a promise. So the dynamically imported component can't be rendered at the very first time, because of its asynchronous operation. Eventually the component gets suspended. To resolve this issue and render the dynamically imported component whenever it is available, we use `<Suspense><Suspense/>` component and use the dynamically imported component as the its children.













# topics coverd

custom hooks:

    1. re-usable
    2. testable
    3. modularity: broken down the code with smaller code with meaning

# bundler functionality for large scale application and system design:

1. lazy loading
2. code splitting
3. chunking
4. dynamic bundling
5. on demand loading
6. dynamic import