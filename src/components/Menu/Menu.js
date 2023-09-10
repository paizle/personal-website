import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faBuilding,
	faDiagramProject,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { structure } from '../../routes/routes'

import './Menu.scss'

structure['Home'].icon = faHouse
structure['Work'].icon = faBuilding
structure['Projects'].icon = faDiagramProject
structure['Contact'].icon = faEnvelope

export default function Menu() {
	const location = useLocation()
	return (
		<nav className="Menu">
			<ul>
				{Object.keys(structure).map((title) => (
					<li key={title}>
						<Link
							to={structure[title].path}
							className={location.pathname === structure[title].path ? 'selected' : ''}
						>
							<span>{title}</span>
							<FontAwesomeIcon icon={structure[title].icon} />
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
