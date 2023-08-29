import React from 'react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash.kebabcase'

import verbInteractive from '../../resources/images/verb-interactive.jpg'
import ironclad from '../../resources/images/ironclad_logo.webp'
import icsCreativeAgency from '../../resources/images/ics-creative-agency.jpg'
import tuki from '../../resources/images/tuki.jpg'
import elandas from '../../resources/images/elandas.jpg'

import Card from '../../components/Card/Card'

import './Projects.scss'

const data = {
	2023: [
		{
			position: 'Frontend Developer',
			company: 'VERB Interactive',
			image: verbInteractive,
			content: '<p>Created various web sites and web applications using React</p>',
		},
	],
	2021: [
		{
			company: 'IronClad Web Technologies',
			image: ironclad,
			content: 'this is a test',
		},
	],
	2020: [
		{
			company: 'ICS Creative Agency',
			image: icsCreativeAgency,
			content: 'this is a test',
		},
	],
	2018: [
		{
			company: 'Correnet',
			image: tuki,
			content: 'this is a test',
		},
	],
	2014: [
		{
			company: 'Elandas',
			image: elandas,
			content: 'this is a test',
		},
	],
}

const Projects = () => {
	let lastYear, lastCompany
	return (
		<div className="Work">
			<h3>Work</h3>

			{Object.keys(data)
				.sort((a, b) => parseInt(b) - parseInt(a))
				.map((year, yearIndex) => {
					const out = (
						<>
							{lastYear !== year ? <h4 className="year">{year}</h4> : ''}
							{data[year].map((work, workIndex) => {
								const out2 = lastCompany !== work.company && (
									<Card
										key={`projects_${yearIndex}_${workIndex}`}
										title={`${work.position} @ ${work.company}`}
										imgSrc={work.image}
									>
										<div
											className="html"
											dangerouslySetInnerHTML={{ __html: work.content }}
										/>
										<div className="links">
											&rarr;{' '}
											<Link to={`/projects#${kebabCase(work.company)}`}>projects</Link>
										</div>
									</Card>
								)
								lastCompany = work.company
								return out2
							})}
						</>
					)
					lastYear = year
					return out
				})}
		</div>
	)
}

export default Projects
