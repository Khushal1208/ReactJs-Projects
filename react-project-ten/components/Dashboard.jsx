import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  function handleClick(){
    navigate('/')
  }

  return (
    <div>
      Dashboard Page
      <button onClick={handleClick}>
        Move to Home Page
      </button>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  )
}

export default Dashboard
