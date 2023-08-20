import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Context/ContextProvider'
import DirectorData from './DirectorData'

export default function DirectorContainer() {
    const { director } = useContext(AuthContext)
    
  return (
    <div id="professorMsg">
      <div className="container">
        {
          director.map((director, idx) => <DirectorData key={idx} director={director}/>)
        }
        
      </div>
    </div>
  )
}
