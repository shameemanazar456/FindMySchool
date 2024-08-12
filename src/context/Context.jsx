import React, { createContext, useContext, useState } from 'react'

export const isLoggedInContext = createContext()
export const isAdminLoggedInContext = createContext()

function Context({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false)

  return (
    <isAdminLoggedInContext.Provider value={{isAdminLoggedIn,setIsAdminLoggedIn}}><isLoggedInContext.Provider value = {{isLoggedIn,setIsLoggedIn}} >{children}</isLoggedInContext.Provider></isAdminLoggedInContext.Provider>
  )
}

export default Context