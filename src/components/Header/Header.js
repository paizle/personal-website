import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

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
						title="Toggle Dark Mode"
					>
						<FontAwesomeIcon icon={faCircleHalfStroke} />
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
