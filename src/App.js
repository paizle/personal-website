import React, { useState } from 'react'
import './App.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faDiagramProject,
	faEnvelope,
	faCircleHalfStroke,
} from '@fortawesome/free-solid-svg-icons'
function App() {
	const [darkMode, setDarkMode] = useState(
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
	)

	return (
		<div className={`App ${darkMode ? 'dark-theme' : ''}`}>
			<header className="app-header">
				<div className="banner">
					<h1>Matthew MacPherson</h1>
					<div className="actions">
						<button
							className="blank-button"
							onClick={() => setDarkMode(!darkMode)}
							title="Toggle Dark Mode"
						>
							<FontAwesomeIcon icon={faCircleHalfStroke} />
						</button>
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
