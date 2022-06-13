import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt='Job Tracker' className='logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>Track your job application process better</p>
        </div>
      </div>
    </main>
  )
}

export default Landing