import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <h1>
        Dashboard page
        <Outlet/>
        </h1>
    </div>
  )
}

export default Dashboard