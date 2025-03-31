import './App.css'
import Card from "./components/Card"
import Button from './components/Button'
import { useState } from 'react'
function App() {
  const [count,setCount] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

  return (
    <div>
      <Button handleClick = {handleClick} text="click me" >
        <h1>{count}</h1>
      </Button>

      <Card name="love babar">
        <h1>Best WEB DEV course</h1>
        <p>Trying to be consistent</p>
        <p>Will continue...</p>
      </Card>
      <Card children="i am children">
        this is explicit way of showing children
      </Card>
    </div>
  )
}

export default App
