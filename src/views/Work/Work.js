import React from 'react'
import kebabCase from 'lodash.kebabcase'
import Card from '../../components/Card/Card'
import data from '../../data/work.json'
import useLocationHash from '../../util/useLocationHash'
import { Link } from 'react-router-dom'
import './Work.scss'

const Work = () => {
	useLocationHash()

	const workEntries = formatWorkData(data)

	return (
		<div className="Work timeline">
			<h2 className="page-title">Work</h2>

			{workEntries.map((work, workIndex) => (
				<React.Fragment key={workIndex}>
					{work.year && <h3 className="year">{work.year}</h3>}
					<div className="card-container">
						<a id={kebabCase(work.company)} className="anchor-position" />
						<Card
							title={
								<>
									<span>{work.position}</span>
									<span> @ {work.company}</span>
								</>
							}
							imgSrc={work.image}
						>
							<div
								className="html"
								dangerouslySetInnerHTML={{ __html: work.content }}
							/>

							<div className="links">
								&larr;{' '}
								<Link to={`/projects#${kebabCase(work.company)}`}>
									See the projects I worked on at {work.company}
								</Link>
							</div>
							<a name={kebabCase(work.company)} />
						</Card>
						<hr />
					</div>
				</React.Fragment>
			))}
		</div>
	)
}

function formatWorkData(data) {
	const result = []
	let lastYear = null
	let lastCompany = null
	const years = Object.keys(data).sort((a, b) => parseInt(b) - parseInt(a))
	for (let i = 0; i < years.length; i++) {
		const year = years[i]
		for (let j = 0; j < data[year].length; j++) {
			const entry = data[year][j]
			if (lastYear !== year) {
				lastYear = year
				entry.year = year
			}
			if (lastCompany !== entry.company) {
				lastCompany = entry.company
			} else {
				entry.company = ''
			}
			result.push(entry)
		}
	}
	return result
}

export default Work
