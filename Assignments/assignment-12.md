## Theory:

    - useContext vs Redux:

    	- Redux is a centralized store that can hold the entire state of an application, and its actions and reducers manage updates to the state. It's useful when you have complex or large state management needs, and you want to maintain a single source of truth for your state.

		On the other hand, useContext hook is a simpler alternative to Redux, especially when your state needs are small or local. It provides a way to pass data from a parent component to its children components without having to pass the data down as props through every level. This can make your code more readable and maintainable.
	
	- Advantage of using Redux Toolkit over Redux
		
		- Redux toolkit has evolved with solving problems like reducing boiler plate code, providing more control over code and making it more developer friendly 
	
	- Explain Dispatcher
		
		- Dispatcher is used to dispatch an event from UI that calls a reducer and the reducer updates the state of corresponding slice. Event dispatching is done by using a hook called useDispatch.
	
	- Explain Reducer
		
		- Reducer is a function which gets called after dispatching an event

	- Explain slice
		
		- Slice represents a topic for state management which includes state, reducer and actions
	
	- Explain selector
		
		- In order to subscribe the store data, useSelector hook is used
	
	- Explain createSlice and the configuration it takes
		
		- createSlice is a function which takes following arguments:
		
			i. name
    		ii. initialState,
    		iii. reducers:

		- configuration is done with configureStore that takes reducers as argument. Eg:
			
			`
				configureStore({
					reducer: {
						cart:cartReducer
					},
				})
			`
