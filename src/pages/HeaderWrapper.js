import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'

function HeaderWrapper() {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}

export default HeaderWrapper