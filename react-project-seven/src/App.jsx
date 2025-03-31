import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [hoverStyle, setHoverStyle] = useState({});

  /*function handleClick() {
    if (message === '') {
      setMessage('muje kyoun toda');
    } else {
      setMessage('');
    }
  }*/

  function handleClick() {
    setMessage((prevMesage) => (prevMesage ? "" : "muje kyoun toda"));
  }
  function handleMouseOver() {
    setHoverStyle({
      color: "green",
      fontSize: "100px",
      transition: "all 0.3s ease",
      border : "1px solid black"
    });
  }

  function handleMouseOut() {
    setHoverStyle({});
  }

  function handleInputChange(e){
  //  console.log("Input me Value change hui hai");
   console.log("value till now",e.target.value);

  }

  function handleSubmit(e){
    e.preventDefault()
    // i am writting my custom behaviour down
    alert('form submit kardu kya')
  }

  return (
    <div>
      <button onClick={alert('dont do immdeidate invoke')}>click me</button>
      <button onClick={()=> alert('this is good way to use it ')}>click me</button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      <p
        style={hoverStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        I am para
      </p>
      <button onClick={handleClick}>Click me </button>
      {message && <h1>{message}</h1>}
    </div>
  );
}

export default App;
