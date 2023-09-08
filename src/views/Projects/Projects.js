import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash.kebabcase'
import Card from '../../components/Card/Card'
import data from '../../data/projects.json'
import setHighestWidth from '../../util/setHighestWidth'
import useLocationHash from '../../util/useLocationHash'

import './Projects.scss'

const Projects = () => {
	let lastYear, lastCompany

	useLocationHash()

	useLayoutEffect(() => {
		setHighestWidth(Array.from(document.getElementsByClassName('year')))
		setHighestWidth(Array.from(document.getElementsByClassName('company')))
	}, [])

	return (
		<div className="Projects">
			<h2 className="page-title">Projects</h2>

			{Object.keys(data)
				.sort((a, b) => parseInt(b) - parseInt(a))
				.map((year, yearIndex) => {
					const out = (
						<>
							{lastYear !== year && (
								<>
									<h3 className="year">{year}</h3>
									<div />
								</>
							)}
							{Object.keys(data[year])
								.sort((a, b) => parseInt(b) - parseInt(a))
								.map((company, companyIndex) => {
									const out2 = (
										<>
											{lastCompany !== company && (
												<Link to={`/work#${kebabCase(company)}`}>
													<h3 className="company">{company}</h3>
												</Link>
											)}
											{data[year][company].map((project, projectIndex) => (
												<>
													<Card
														key={`projects_${yearIndex}_${companyIndex}_${projectIndex}`}
														title={project.title}
														imgSrc={project.image}
													>
														<a name={kebabCase(company)} />
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
												</>
											))}
										</>
									)
									lastCompany = company
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
