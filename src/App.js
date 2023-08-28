import React from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faDiagramProject,
  faEnvelope,
  faCircleHalfStroke,
} from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="banner">
          <h1>Matthew MacPherson</h1>
          <div>
            <FontAwesomeIcon icon={faCircleHalfStroke} />
          </div>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/">
                <span>Home</span>
                <FontAwesomeIcon icon={faHouse} />
              </a>
            </li>
            <li>
              <a href="/">
                <span>Projects</span>
                <FontAwesomeIcon icon={faDiagramProject} />
              </a>
            </li>
            <li>
              <a href="/">
                <span>Contact</span>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
