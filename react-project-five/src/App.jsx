import { useState } from "react";
import './App.css'
import Card from "./components/Card"

function App() {
  // create state
  // manage state
  // change state
  // sabhi child me state ko sync karwadenge

  const [name,setName] = useState("") 

  return (
      <div>
        <Card title="card1" name={name} setName={setName}/>
        <Card title="card2" name={name} setName={setName}/>
        {/* <p>I am inside Parent Component and Value of name is {name}</p> */}
      </div>
  )
}

export default App

// https://react.dev/learn/sharing-state-between-components

// Sharing State Between Components
// Sometimes, you want the state of two components to always change together
//  To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as lifting state up, and it’s one of the most common things you will do writing React code.