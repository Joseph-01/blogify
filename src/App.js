import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </>
  )
}

export default App