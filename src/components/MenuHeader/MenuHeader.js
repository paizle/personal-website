import React from 'react'
import PropTypes from 'prop-types'
import './MenuHeader.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu/Menu'

const MenuHeader = ({ darkMode, setDarkMode }) => {
	return (
		<header className="MenuHeader">
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

export default MenuHeader

MenuHeader.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	setDarkMode: PropTypes.func.isRequired,
}
