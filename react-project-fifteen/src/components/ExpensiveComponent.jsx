import React , {useState,useCallback} from 'react'

const ExpensiveComponent = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState('')
    const previousFunction = useRef(null)

    const ExpensiveCalculation = useCallback(() => {
        console.log('Running expensive calculation...');
        let result = 0
        for (let i = 0 ; i < 1000000000 ; i++){
            result +=i
        }
        return result
    },[count])

    useEffect(() => {
      if(previousFunction.current){
        if(previousFunction.current === ExpensiveCalculation){
            console.log('function not re-created');
        }else{
            console.log('function got re-created');
            
        }
      }else{
        previousFunction.current=ExpensiveCalculation
      }
    }, [ExpensiveCalculation])
    



  return (
    <div>
        <input type="text" value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder='Type Something'/>
      
      <p>Expensive Calculation Result : {ExpensiveCalculation()}</p>
      <button onClick={() => setCount(count+1)}>Increment Count</button>
    </div>
  )
}

export default ExpensiveComponent
