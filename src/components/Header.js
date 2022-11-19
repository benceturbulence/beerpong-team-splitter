import React, { useContext } from 'react'
import { AppContext } from '../appContext';
// import lightIcon from 'light.png'
import nightIcon from '../img/dark.png'
import headerImg from '../img/header.jpg'
import lightIcon from '../img/light.png'
import headerLogo from '../img/header-logo.png'
import logo from '../img/logo.png'

export default function Header() {
  const { darkMode, toggleDarkMode } = React.useContext(AppContext)

  return (

    <header>
      <img src={headerImg} alt="header-img" className="header-img" />
      <nav className="navbar">
        <img className="headerLogo" src={logo} alt="logo" />
        <h2>Beerpong Grouper</h2>
        <div className="modeToggle" onClick={toggleDarkMode}>
          {!darkMode ? <img className="togglerIcon" src={nightIcon} /> :
          <img className="togglerIcon" src={lightIcon} /> }
        </div>
      </nav>
      <div className="heroContentContainer">
        <h1 className="heroTitle">Team up with your best mates to win!</h1>
      </div>
    </header>
  )
}