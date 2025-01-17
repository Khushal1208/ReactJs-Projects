import Chai from "./chai"

function App() {
  const username = "Chai aur code"

  return (
    // can return only one element , so in jsx we use empty element
    <>
    <Chai/>
    {/* it is evaluated expression(means final output) */}
    <h1>Chai aur react with {username} | HC</h1>
    <p>hi i am paragraph</p>
    </>
  )
}

export default App
