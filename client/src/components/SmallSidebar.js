import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'


const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <h4>
        <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"}>
          <div className="content">
            <button type='button' className='close-btn' onClick={toggleSidebar}>
              <FaTimes />
            </button>
            <header>
              <Logo />
            </header>
          </div>
        </div>
      </h4>
    </Wrapper>
  )
}

export default SmallSidebar