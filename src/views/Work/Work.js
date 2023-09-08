import React from 'react'
import { Link } from 'react-router-dom'
import kebabCase from 'lodash.kebabcase'
import Card from '../../components/Card/Card'
import data from '../../data/work.json'
import useLocationHash from '../../util/useLocationHash'
import './Work.scss'

const Work = () => {
	let lastYear, lastCompany
	useLocationHash()
	return (
		<div className="Work">
			<h2 className="page-title">Work</h2>

			{Object.keys(data)
				.sort((a, b) => parseInt(b) - parseInt(a))
				.map((year, yearIndex) => {
					const out = (
						<>
							{lastYear !== year && <h3 className="year">{year}</h3>}
							{data[year].map((work, workIndex) => {
								const out2 = lastCompany !== work.company && (
									<>
										<Card
											key={`projects_${yearIndex}_${workIndex}`}
											title={
												<>
													<span>{work.position}</span>
													<span>@ {work.company}</span>
												</>
											}
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
											<a name={kebabCase(work.company)} />
										</Card>
										<hr />
									</>
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

export default Work
