import './App.css'
import UserCard from './components/UserCard'
import Sunnydeol from "./assets/sunnydeol.jpg"
import Maharana from "./assets/sunnydeol.jpg"
import PrithviRaj from "./assets/sunnydeol.jpg"

function App() {

  return (
   <div className='container'>
   <UserCard name="Love Rana" desc="desc1" image={Sunnydeol} style={
   { "border-radius":"10px"}
   }/>
   <UserCard name="Maharana Pratap" desc="desc2"image={Maharana} style={
   { "border-radius":"10px"}
   } />
   <UserCard name="PrithviRaj Chauhan" desc="desc3" image={PrithviRaj} style={
   { "border-radius":"10px"}
   }/>
   </div>

  )
}

export default App
