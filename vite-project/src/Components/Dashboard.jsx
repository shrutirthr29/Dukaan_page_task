import React from 'react'
import './css/Dashboard.css'
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
export default function Dashboard() {
  return (
    <div className='dashboard_main'>
      <Dashboard1 />
      <Dashboard2 />
    </div>
  )
}