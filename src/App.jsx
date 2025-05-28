import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calender'
import UpcomingSchedule from './components/upcomingSchelude'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div style={{ display: 'flex' }}>
      <Sidebar/>
      <Dashboard/>
      <div>
      <Calendar/>
      <UpcomingSchedule/>
      </div>
    </div>
    </>
  )
}

export default App
