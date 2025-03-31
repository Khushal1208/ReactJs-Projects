import { useState, useCallback } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import ExpensiveComponent from "./components/ExpensiveComponent";

function App() {
  const [count, setCount] = useState(0);

  // Correcting the dependency to avoid unnecessary re-renders
  const handelClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (

    <div>
      <ExpensiveComponent/>
      <br />
      <br />
      <br />
      <br />

      <p>Count: {count}</p>
      <button onClick={handelClick}>Increment</button>
      <br /><br />
      <div>
        <ChildComponent buttonName="Click me" handelClick={handelClick} />
      </div>
    </div>
  );
}

export default App;


// useCallback saves function from unnessary Re-renders of child component.
// useMemo  is used to stop re-render for same value .
// useCallback is used to stop unnacary function re-creation at re-run.