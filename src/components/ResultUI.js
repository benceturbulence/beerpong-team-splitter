import React, { useState, useContext } from 'react'
import { AppContext } from '../appContext';
import groupSplitter from './groupSplitter'


export default function ResultUI() {
  const { teamParams, setIsStarted } = useContext(AppContext)
  const { members, headCount } = teamParams
  const [groups, setGroups] = useState([])

  function toggleShuffle() {
    let subgroups = groupSplitter(members, headCount)
    setGroups(subgroups)
  }

  let shuffledTeams = groups.map(group => <div className="team"><h4>Team {groups.indexOf(group)+1}</h4> <ul className="team-list">{group.map(e => <li>{e}</li>)}</ul></div>) 

  return (
    <section className="content-container">
      {groups.length < 1 ? (<>
        <h1>Players</h1>
        <ul className="team-list">{members.map(e => <li>{e}</li>)}</ul>
        </>) :  
      (<>
        {shuffledTeams}
        </>)
      }
      <button className="btn shuffle" onClick={toggleShuffle}>{groups.length<1 ? "Shuffle groups" : "Reshuffle groups"}</button>
      <button className="btn reset" onClick={() => setIsStarted(false)}>Reset</button>
    </section>
  )
}