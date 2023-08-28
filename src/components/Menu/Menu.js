import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faHouse,
	faDiagramProject,
	faEnvelope,
	faBuilding,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './Menu.scss'

export default function Menu() {
	return (
		<div className="Menu">
			<ul>
				<li>
					<Link to="/">
						<span>Home</span>
						<FontAwesomeIcon icon={faHouse} />
					</Link>
				</li>
				<li>
					<Link to="/work">
						<span>Work</span>
						<FontAwesomeIcon icon={faBuilding} />
					</Link>
				</li>
				<li>
					<Link to="/projects">
						<span>Projects</span>
						<FontAwesomeIcon icon={faDiagramProject} />
					</Link>
				</li>

				<li>
					<Link to="/contact">
						<span>Contact</span>
						<FontAwesomeIcon icon={faEnvelope} />
					</Link>
				</li>
			</ul>
		</div>
	)
}
