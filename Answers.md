1. What problem does the context API help solve?

  The Context API helps simplify state management. When the programmer has many components that share the same state, Context API provides a way to share that state without explicitly passing props around.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Store => contains our state for our application
  Actions => packets of information that contain an action type and associated data
  Reducers => a pure function that takes the previous state and an action, and returns the next state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state provides state to the whole app, and is good to use when the whole app needs the same state. Component state provides state to a particular component, and is good to use when just one component needs a certain state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is a middleware that provides the ability to handle asynchronous operations inside action creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

  Right now I would say Redux because I understand it better than the rest. The boilerplate code is easier to remember and only has to change a little for the type of apps we’re creating.
