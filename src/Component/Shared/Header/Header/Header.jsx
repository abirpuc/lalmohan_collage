import React, { useCallback, useContext } from 'react'
import TopNav from '../TopNav/TopNav'
import InstituteInfo from '../InstituteIdenti/InstituteInfo'
import LatestNotice from '../LatestNotice/LatestNotice'
import NavBar from '../NavBar/NavBar'
import { AuthContext } from '../../../../Context/ContextProvider'

export default function Header() {
  const {user} = useContext(AuthContext)
  return (
    <div>
        <TopNav user={user}/>
        <InstituteInfo/>
        <LatestNotice/>
        <NavBar/>
    </div>
  )
}
