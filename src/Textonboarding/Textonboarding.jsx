import React from 'react'
import './Textonboarding.css'

const Textonboarding = ({ heading, paragraph }) => {
  return (
    <div>
      <div className="centered-content">
      <h1 className='main-headi'>{heading}</h1>
      <p className='sideheading'>{paragraph}</p>
    </div>
    </div>
  )
}

export default Textonboarding
