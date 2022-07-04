import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import Logo from '../components/Logo'
import { useAppContext } from '../context/appContext' 



const BigSidebar = () => {
  const {showSidebar} = useAppContext()

  return (
    <Wrapper>
      <div className={showSidebar?'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className="content">
          
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar