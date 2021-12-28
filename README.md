# CountingDeclarative
Created with CodeSandbox. Using the State Hook.

## Differences between Declarative and imperative programming: 
### Declarative programming is a programming paradigm … that expresses the logic of a computation without describing its control flow.
### Imperative programming is a programming paradigm that uses statements that change a program’s state.

## Examples:
Here we just have a button that changes it’s color on click. I’ll start with the imperative example:

``const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);``

And our declarative React example:

``class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}``

The differences here may be subtle. We still have logic that says if red then blue, but there’s one huge difference. The React example never actually touches an element. it simply declares an element should be rendered given our current state. It does not actually manipulate the DOM itself.

## Hooks (Declarative programming)
What is a Hook? A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. 
### Declaring a State Variable
In a function component, unlike the class components, we have no this, so we can’t assign or read this.state. Instead, we call the useState Hook directly inside our component:

``import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);``
  
  What does calling useState do? It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
  
  What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)

What does useState return? It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair. If you’re not familiar with the syntax we used, we’ll come back to it at the bottom of this page.

Now that we know what the useState Hook does, our example should make more sense:

``import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);``
 
 We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.

