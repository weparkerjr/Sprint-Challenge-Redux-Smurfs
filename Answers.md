1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? 

## 1. map(),
## 2. filter(),
## 3. reduce()

Which method do we use to create a new object while extending the properties of another object?

## Object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

## Actions are plain JS objects or function that return plain JS objects. Actions as functions call reducers. Reducers are pure functions that never produce side effects. Store is the same as React's state but it is in a centralized location to be used by big applications

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

## Component state only concerns the component in which it is in and is best used when the state is only needed within that one component. Application state is best used if multiple components need the same source.

1.  What is middleware?

## Middleware allows chages to be made to or side effect derived from actions. It is between the action being dispatched and it arriving to the reducer.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

## Redux-thunk allows us to handle asynchronous operations inside our action creators.

1.  Which `react-redux` method links up our `components` with our `redux store`?

## connect() method
