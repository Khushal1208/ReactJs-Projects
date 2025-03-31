import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

//step:1 create Context
const UserContext = createContext()

//step:2 wrap all the child inside a provider jo context use karna chahte hai
//step:3  pass value
//step:4  export UserContext
//step:5  consumer k andar jaake consume karlo


function App() {
  const [user,setUser] = useState({name:'Love'})
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
        </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}