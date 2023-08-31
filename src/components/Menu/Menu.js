import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faDiagramProject,
	faEnvelope,
	faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router-dom'
import './Menu.scss'

export default function Menu() {
	const location = useLocation()

	console.log(location.pathname)

	return (
		<nav className="Menu">
			<ul>
				<li>
					<Link to="/" className={location.pathname === '/' && 'selected'}>
						<span>Home</span>
						<FontAwesomeIcon icon={faHouse} />
					</Link>
				</li>
				<li>
					<Link to="/work" className={location.pathname === '/work' && 'selected'}>
						<span>Work</span>
						<FontAwesomeIcon icon={faBuilding} />
					</Link>
				</li>
				<li>
					<Link
						to="/projects"
						className={location.pathname === '/projects' && 'selected'}
					>
						<span>Projects</span>
						<FontAwesomeIcon icon={faDiagramProject} />
					</Link>
				</li>

				<li>
					<Link to="/contact" className={location.pathname === '/' && 'contact'}>
						<span>Contact</span>
						<FontAwesomeIcon icon={faEnvelope} />
					</Link>
				</li>
			</ul>
		</nav>
	)
}
