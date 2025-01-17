import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return (
    <div>
    <h1>Custom App || Chai</h1>
    </div>
  )
}
/*
const ReactELement = {
  type: 'a',
  props: {
      href: 'https://www.google.com/',
      target: '_blank'
  },
  children: 'Click me to visit Google'
}*/

// Using JSX to create an anchor element
const anotherElement = (
  <a href='https://www.google.com' target ='_blank'>Visit Google</a>
)

const anotherUser = "Chai aur react"

// Using React.createElement to create an anchor element
const reactELement = React.createElement(
  'a',
  {href: 'https://www.google.com',target:'_blank'},
  'Click me to visit Google ',
  anotherUser
)

// Rendering the desired element or component
createRoot(document.getElementById('root')).
render(
  reactELement
  // MyApp()
//  <MyApp/>,
//  <App/> 
// ReactELement  -> not working
// anotherElement  // -> will work
)
