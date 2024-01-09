import React from 'react'
// import ReactDOM from 'react-dom' 
// import './App.css'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'

export default function App() {
  return (
    <div className='main-page'>
      <Navbar />
      <Dashboard />
    </div>
  )
}

// ReactDOM.render(<App />, document.getElementById("root"))

