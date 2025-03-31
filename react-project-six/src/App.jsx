import { useState } from "react";
import "./App.css";
import LogoutBtn from "./components/LogoutBtn";
import LoginBtn from "./components/LoginBtn";

function App() {
  const [IsLoggedIn, setLoggedIn] = useState(false);

  /* Early Return

  if (!IsLoggedIn) {
    return <LoginBtn />;
  }
  */


  /* Logical optr 
return (
  <div>
    <h1>Welcome Everyone to CodeHelp web dev course</h1>
    <div>
      {IsLoggedIn && <LogoutBtn/>}
    </div>
  </div>
)
*/

  /* Ternary optr
  return (
    <div>
      {IsLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    </div>
  )
*/

  /* ifelse
   if (IsLoggedIn) {
    return <LogoutBtn />;
  } else {
    return <LoginBtn/>
  } */
}

export default App;
