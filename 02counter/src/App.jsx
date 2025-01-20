import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter,hiteshCounter]  = useState(15)

  // let counter = 15;

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;
    if(counter<=30){
      hiteshCounter(counter)
    }
  };

  const removeValue = () => {
    console.log("clicked", counter);
    counter = counter - 1;
    if(counter>=0){
      hiteshCounter(counter)
    }

  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={removeValue}>remove value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  ); 
}

export default App;

// hooks 
// changes propagation 
// useState 
