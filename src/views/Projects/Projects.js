import React from 'react'
import './Projects.scss'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash.kebabcase'
import Card from '../../components/Card/Card'
import data from '../../data/projects.json'
import useLocationHash from '../../util/useLocationHash'

const Projects = () => {
	useLocationHash()

	const projects = formatProjectData(data)

	return (
		<div className="Projects timeline">
			<h2 className="page-title">Projects</h2>
			{projects.map((project, projectIndex) => (
				<React.Fragment key={projectIndex}>
					{project.year && <h3 className="year">{project.year}</h3>}
					{project.company && (
						<Link to={`/work#${kebabCase(project.company)}`}>
							<h3 className="company">{project.company}</h3>
						</Link>
					)}
					<div className="card-container">
						{project.company && (
							<a id={kebabCase(project.company)} className="anchor-position" />
						)}
						<Card title={project.title} imgSrc={project.image}>
							<div
								className="html"
								dangerouslySetInnerHTML={{ __html: project.content }}
							/>
							<div className="technologies">
								{project.technologies.map((technology, technologyIndex) => (
									<div key={technologyIndex} className="technology">
										{technology}
									</div>
								))}
							</div>
						</Card>
						<hr />
					</div>
				</React.Fragment>
			))}
		</div>
	)
}

function formatProjectData(data) {
	const result = []
	let lastYear = null
	let lastCompany = null
	const years = Object.keys(data).sort((a, b) => parseInt(b) - parseInt(a))
	for (let i = 0; i < years.length; i++) {
		const year = years[i]
		const companies = Object.keys(data[year])
		for (let j = 0; j < companies.length; j++) {
			const company = companies[j]
			for (let k = 0; k < data[year][company].length; k++) {
				const entry = data[year][company][k]
				if (lastYear !== year) {
					lastYear = year
					entry.year = year
				}
				if (lastCompany !== company) {
					lastCompany = company
					entry.company = company
				}
				result.push(entry)
			}
		}
	}
	return result
}

export default Projects
