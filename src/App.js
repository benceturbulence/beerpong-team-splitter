import React, { useContext } from 'react'
import { AppContext } from './appContext'
import './App.css'
import Header from './components/Header'
import StartUI from './components/StartUI'
import ResultUI from './components/ResultUI'

export default function App() {

  const { isStarted, darkMode } = useContext(AppContext)

  return (
    <div className={`${darkMode ? "dark" : "light"} wrapper`}>
      <Header />

      {!isStarted ? <StartUI /> : <ResultUI />}

    </div>
  )
}
