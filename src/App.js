import React, { useState } from 'react'
import MenuHeader from './components/MenuHeader/MenuHeader'

import { Outlet } from 'react-router-dom'

import getDefaultDarkMode from './util/getDefaultDarkMode'

import './App.scss'

function App() {
	const [darkMode, setDarkMode] = useState(getDefaultDarkMode())

	return (
		<div className={`App ${darkMode ? 'dark-theme' : ''}`}>
			<MenuHeader darkMode={darkMode} setDarkMode={setDarkMode} />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
