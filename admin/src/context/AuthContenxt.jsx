import React from 'react'
import { createContext } from 'react'


export const authDataContext = createContext()
function AuthContenxt({children}) {


let serverUrl = "http://localhost:8000"



let value={
serverUrl
}

  return (
    <div>

        <authDataContext.Provider value={value}>
         {children}
        </authDataContext.Provider>
    </div>
  )
}

export default AuthContenxt