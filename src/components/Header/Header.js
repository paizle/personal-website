import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import Menu from '../Menu/Menu'

export default function Header({ darkMode, setDarkMode }) {
	return (
		<header className="app-header">
			<div className="banner">
				<h1>Matthew MacPherson</h1>
				<div className="actions">
					<button
						className="blank-button"
						onClick={() => setDarkMode(!darkMode)}
						title={darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
					>
						{darkMode ? (
							<FontAwesomeIcon icon={faSun} />
						) : (
							<FontAwesomeIcon icon={faMoon} />
						)}
					</button>
				</div>
			</div>
			<Menu />
		</header>
	)
}

Header.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	setDarkMode: PropTypes.func.isRequired,
}
