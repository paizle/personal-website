import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faBuilding,
	faDiagramProject,
	//faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { structure } from '../../routes/routes'

import './Menu.scss'

export default function Menu() {
	const [open, setOpen] = React.useState(false)

	const location = useLocation()

	return (
		<nav className={`Menu ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
			<ul>
				<li
					className={`home ${
						location.pathname === structure['Home'].path ? 'selected' : ''
					}`}
				>
					<Link to={structure['Home'].path}>
						<span>Home</span>
						<FontAwesomeIcon icon={faHouse} />
					</Link>
				</li>

				<li
					className={`work ${
						location.pathname === structure['Work'].path ? 'selected' : ''
					}`}
				>
					<Link to={structure['Work'].path}>
						<span>Work</span>
						<FontAwesomeIcon icon={faBuilding} />
					</Link>
				</li>

				<li
					className={`projects ${
						location.pathname === structure['Projects'].path ? 'selected' : ''
					}`}
				>
					<Link to={structure['Projects'].path}>
						<span>Projects</span>
						<FontAwesomeIcon icon={faDiagramProject} />
					</Link>
				</li>
			</ul>
		</nav>
	)
}
