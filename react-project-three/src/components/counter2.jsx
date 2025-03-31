import react, { useState } from "react";

const Counter2 = () => {
    
//    [state, setState] = useState(0);  state is state variable , setState is function and  useState(0) is initial state

  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <p id="para">You have clicked {count} times</p>
      <button id="btn" onClick={()=>{setCount(count+1)}}>Click me</button>
    </div>
  );
};

export default Counter2;
