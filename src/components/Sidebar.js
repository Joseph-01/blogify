import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'


function Sidebar() {
  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars />Hello
        </Link>
      </div>
      
    </>
  )
}

export default Sidebar