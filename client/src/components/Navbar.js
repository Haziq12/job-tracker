import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import {useState} from 'react' 

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false)
  const {toggleSidebar} = useAppContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type='button'
          className='toggle-btn'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className='btn'
            type='button'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            Haziq
            <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={() => console.log('Logout user clicked')}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar