import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Shared/Header/Header/Header'
import Footer from '../../Shared/Footer/Footer'

export default function MainLayout() {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
