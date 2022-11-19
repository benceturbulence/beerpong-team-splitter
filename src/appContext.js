import React, { createContext, useState } from "react";
const AppContext = createContext()


function AppContextProvider(props) {

  const [darkMode, setDarkMode] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const [isByTeam, setIsByTeam] = useState(true)
  const [teamParams, setTeamParams] = React.useState({
    headCount: '',
    members: ''
  })

  function toggleDarkMode() {
    setDarkMode(prevState => !prevState)
  }

  function toggleIsByTeam(){
    setIsByTeam(prevState => !prevState)
  }

  return (
    <AppContext.Provider value={{
      darkMode, toggleDarkMode,
      isStarted, setIsStarted, 
      teamParams, setTeamParams,
      isByTeam, toggleIsByTeam}}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContextProvider, AppContext }

