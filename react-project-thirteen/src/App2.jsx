import { useState, useEffect, useRef } from "react";
import "./App.css";

function App2() {
  const [time, setTime] = useState(0); //it
  let timerRef = useRef(null);

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    },1000)
  }

  function stopTimer(){
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  function resetTimer(){
    stopTimer()
    setTime(0)
  }

  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br />
      <br />
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App2;
