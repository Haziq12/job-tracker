import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'


const SmallSidebar = () => {
  return (
    <Wrapper>
      <h4>
        <div className="sidebar-container show-sidebar">
          <div className="content">
            
          </div>
        </div>
      </h4>
    </Wrapper>
  )
}

export default SmallSidebar