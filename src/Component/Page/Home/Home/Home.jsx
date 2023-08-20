import React, { useContext } from 'react'
import { AuthContext } from '../../../../Context/ContextProvider'
import BannerContainer from '../../../Banner/BannerContainer/BannerContainer'
import Mujib from '../../../AddContainer/Mujib/Mujib'
import DirectorContainer from '../../../Director/DirectorContainer'

export default function Home() {
  const user = useContext(AuthContext)
  return (
    <>
      <div className="mx-4">
        <BannerContainer />
      </div>
        <Mujib/>
        <DirectorContainer/>
    </>
  )
}
