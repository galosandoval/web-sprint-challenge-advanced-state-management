1. What problem does the context API help solve?

context API helps manage state really well if you want to share state from a parent to a grandchild (or several) component.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? 

Actions are payloads of info that send data from your app to your store. You send them to the store using dispatch

reducers are functions you use that takes state and an action and returns your next state. You put 2 things in it and get one thing back

a store is an object that allows components to share state. It's basically a database

Why is the store known as a 'single source of truth' in a redux application?

because the store contains all your state and can be accessed for anywhere in your app

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is on the global scale. if you want your state to be available at a global level, use Application state. Component state is state used more locally. If you know you just want your state to be used in a component and maybe just its child, you should use component state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk just middleware that lets you call action creators that returns a function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

API Context is my favorite because it seems the most straight forward. However using redux seems to make the most sense but there is also a lot of things to remember to do to be able to use redux
