import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>
    </>
  )
}

export default App