import React from 'react'
import log from '../assets/icons/logo.svg'
import './Nav.css'
const Nav = () => {
  return (
    <div className='navb'>
      <img className='logomain' src={log} alt="" />
      <button id="bottone1"><strong>Discover features</strong></button>
    </div>
  )
}

export default Nav
