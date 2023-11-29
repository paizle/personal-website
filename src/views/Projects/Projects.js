import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash.kebabcase'
import Card from '../../components/Card/Card'
import data from '../../data/projects.json'
import setAllToLongestWidth from '../../util/setHighestWidth'
import useLocationHash from '../../util/useLocationHash'

import './Projects.scss'

const Projects = () => {
	let lastYear, lastCompany

	useLocationHash()

	useLayoutEffect(() => {
		setAllToLongestWidth(Array.from(document.getElementsByClassName('year')))
		setAllToLongestWidth(Array.from(document.getElementsByClassName('company')))
	}, [])

	return (
		<main className="Projects">
			<h2 className="page-title">Projects</h2>
			{Object.keys(data)
				.sort((a, b) => parseInt(b) - parseInt(a))
				.map((year, yearIndex) => {
					const out = (
						<>
							{lastYear !== year && (
								<>
									<span>
										<h3 className="year">{year}</h3>
									</span>
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
		</main>
	)
}

export default Projects
