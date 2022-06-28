import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { Navbar, BigSidebar, SmallSidebar } from '../../components'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar />
        <BigSidebar />
        <div>

        </div>
      </main>
      <Outlet />
    </Wrapper>
  )
}

export default SharedLayout