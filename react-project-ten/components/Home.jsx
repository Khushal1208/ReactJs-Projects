// rafce
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  //  it will navigate me to the other page
  const navigate = useNavigate()
  function handleClick(){
    navigate('/about')
  }

  return (
    <div>
      Home Page
      <button onClick={handleClick}>
        Move to About Page
      </button>
    </div>
  )
}

export default Home
