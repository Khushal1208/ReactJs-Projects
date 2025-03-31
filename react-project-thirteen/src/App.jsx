import { useState, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); //it Re-renders the page 

  let btnRef = useRef()

  /*this will not remember privious data of value after Re-render
  let val =  1;
  function handleIncreament() {
    val = val + 1;
    console.log("Value of val: ", val);

    setCount(count + 1);
  }*/

    // 1. first use of useRef
    // Usinf useRef the "value" will persist the data across the Re-renders
  let val = useRef(0);
  function handleIncreament() {
    val.current = val.current + 1;
    console.log("Value of val: ", val.current);
    setCount(count + 1);
  }

  // 2. Second use of useRef is we can directly change the DOM element (direct access).

  function changeColor(){
    btnRef.current.style.backgroundColor = "red"
  }

  useEffect(() => {
    console.log("mein ferse render hogya hu ");
  }, []);

  return (
    <div>
      <button 
      ref={btnRef}
      onClick={handleIncreament}>Increament</button>
      <br /><br />

      <button onClick={changeColor}>
        Change color of 1st button
      </button>
      <div>Count: {count}</div>
    </div>
  );
}

export default App;
