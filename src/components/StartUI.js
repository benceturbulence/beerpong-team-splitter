import React, { useContext, useState } from 'react'
import { AppContext } from '../appContext';
import createMemberArray from './createMemberArray.js'
import Toggler from './Toggler'

export default function StartUI() {

  // Context data //
  const { setIsStarted, teamParams, setTeamParams, isByTeam, toggleIsByTeam} = React.useContext(AppContext)

  // State to store param inputted
  const [newTeamParams, setNewTeamParams] = React.useState({
    headCount: 0,
    members: ""
  })

  // Changes the state
  function handleChange(event) {
    const { name, value } = event.target
    setNewTeamParams(prevState => (
      { ...prevState, [name]: value }))
  }

  function startApp() {
    // Creates the array of clean names from the textarea
    // Gets the number of people inputted
    let playerArray =  createMemberArray(newTeamParams.members)
    // gets the number inputted by default it is dividing 
    // to groups with a headcount given
    let size = parseInt(newTeamParams.headCount)
    // or it can also divide into x number of teams
    let byTeam = playerArray.length/size
 
  // creating an object to be passed into the context vaiable
  let passObj = (
    { 
    headCount: isByTeam ? size : byTeam,
    members: playerArray
    })
    setTeamParams(passObj)
    setIsStarted(true)
  }


  return (
    <section className="content-container">

      <div className="input-container">
        <input
          name="headCount"
          type="number"
          placeholder="1-10"
          value={newTeamParams.headCount}
          onChange={handleChange}
        />
        <Toggler changeMode={toggleIsByTeam} mode={isByTeam} options={["Teams", "person by team"]}/>
 
         <textarea
          name="members"
          onChange={handleChange}
          value={newTeamParams.members}
          placeholder="Each player in new line"
        />
      </div>    
      <button onClick={startApp} className='btn .startBtn'>Add players!</button>
    </section>
  )
}