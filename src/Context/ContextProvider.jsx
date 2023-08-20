import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext() 

export default function ContextProvider({children}) {

  const [webData, setWebData] = useState(null)
  const [error, setError] = useState(null)
  const [menu, setMenu] = useState([])
  const [subMenu, setSubMenu] = useState([])
  const [slider, setSlider] = useState([])
  const [director, setDirector] = useState([])
 
  useEffect(()=>{
    async function fetchData(){
      try{
        const response =  await fetch('data.json')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json()
        setWebData(data)
        setError(null)
        setMenu(data.menu_list)
        setSubMenu(data.submenu_list)
        setSlider(data.sliders)
        setDirector(data.speeches)

      }catch(e){
        setError(e)
      }
    }
    fetchData()
  },[])

  console.log(error, webData)

  const value ={
    webData,
    menu,
    subMenu,
    slider,
    director
  }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
