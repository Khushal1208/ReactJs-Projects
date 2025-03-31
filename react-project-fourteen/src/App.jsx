import { useState ,useMemo} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function handleClick(){
    setCount(count+1)
  }

  function expensiveTask(num){
    console.log("Inside Expensive Task");
    
    for(let i=0; i<=1000000000 ; i++){}
    return num*2
  }

  // useMemo -> takes two argument function and value . function for calculation and value for which calculation is used . if value changes memo changes other wise it will remember it's calculation till value is not changed.

  let doubleValue = useMemo(() => expensiveTask(input), [input])

  return (
   <div>
    <button onClick={handleClick}>Increment</button>
    <p>Count: {count}</p>
    <input 
    type="Number"  
    placeholder='Enter Number' 
    value = {input}
    onChange={(e) => setInput(e.target.value)}
     />
    <p>Double Value: {doubleValue}</p>
   </div>
  )
}

export default App
