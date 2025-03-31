import react, { useState } from "react";

const Counter = () => {

// Functions starting with use are called Hooks. useState is a built-in Hook provided by React

//Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.

// You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].

//    [state, setState] = useState(0);  state is state variable , setState is function and  useState(0) is initial state

  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <p id="para">You have clicked {count} times</p>
      <button id="btn" onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  );
};

export default Counter;
