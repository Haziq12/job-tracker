import React from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import { GrWorkshop } from 'react-icons/gr'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'

const Navbar = () => {
  const {toggleSidebar} = useAppContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type='button'
          className='toggle-btn'
          onClick={() => console.log('toggle sidebar')}
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
            onClick={() => console.log('Show/hide dropdown')}
          >
            <FaUserCircle />
            Haziq
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
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