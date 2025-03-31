import { useEffect, useState } from "react";
import "./App.css";
import LoggerComponent from "./components/LoggerComponent"
import TimerComponent from "./components/TimerComponent"
import DataFetcher from "./components/DataFetcher"
import ResizeComponent from "./components/ResizeComponent"
import MultiEffectComponent from "./components/MultiEffectComponent"


function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  //  first  -> side effect function or logic
  // second -> clean-up function , means kya change hua hai to bta dega
  // third  -> comma separated dependency list (list of things , if that changes then effect will run)
/*
Execution Flow:
Component Mounts → alert('Count is updated') runs.

count changes → Cleanup (alert("count is unmounted from UI") runs first), then alert('Count is updated') runs again.

Component Unmounts → Cleanup function runs (alert("count is unmounted from UI")).
*/

  //Variation:1
  // runs on every render
  /*
  useEffect( () => {
    alert('I will run on each render')
  })
*/

  // Variation:2
  // that runs on only first render
  // array of dependency list is empty
  /*
  useEffect( () => {
    alert('I will run on only first render')
  },[])
*/

  // Variation:3
 /*  useEffect(() => {
    alert('I will run every time when count is updated')
  }, [count]);
*/

    // Variation:4
    //  multiple dependencies
  /*  useEffect(() => {
      alert('I will run every time when either count or total changes')
    }, [count, total])
*/

    // Variation:5
    // iss bar let's add a cleanup function
 /*   useEffect(() => {
      alert('Count is updated')
    
      return () => {
        alert("count is unmounted(remove ho jaana) from UI")
      }
    }, [count])
    
  */  
/*
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickTOtal(){
    setTotal(total + 1);

  }*/

  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultiEffectComponent/>

      {/* <button onClick={handleClick}>Update Count</button>
      <p>Count is: {count}</p> 
      <button onClick={handleClickTOtal}>Update Total</button>
      <p>Total is: {total}</p> */}
    </div>
  );
}

export default App;

// for a particular event  , i want to run an effect that is called "useEffect HOOK"
// example:- events like login , dbConnection , rendering , etc. and Effects like :- alert , profile poc load after login, fetch api , console log , etc.
