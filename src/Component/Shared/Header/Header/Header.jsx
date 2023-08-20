import React from 'react'
import TopNav from '../TopNav/TopNav'
import InstituteInfo from '../InstituteIdenti/InstituteInfo'
import LatestNotice from '../LatestNotice/LatestNotice'
import NavBar from '../NavBar/NavBar'

export default function Header() {
  return (
    <div>
        <TopNav/>
        <InstituteInfo/>
        <LatestNotice/>
        <NavBar/>
    </div>
  )
}
