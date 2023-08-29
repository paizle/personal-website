import React from 'react'

import verbInteractive from '../../resources/images/verb-interactive.jpg'
import ironclad from '../../resources/images/ironclad_logo.webp'
import icsCreativeAgency from '../../resources/images/ics-creative-agency.jpg'
import tuki from '../../resources/images/tuki.jpg'
import elandas from '../../resources/images/elandas.jpg'

import './Work.scss'

const data = {
	2023: [
		{
			company: 'VERB Interactive',
			image: verbInteractive,
			content: 'this is a test',
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

const Work = () => {
	let lastYear, lastCompany
	return (
		<div className="Work">
			<h3>Work</h3>

			{Object.keys(data)
				.sort((a, b) => parseInt(b) - parseInt(a))
				.map((year, dataIndex) => {
					const out = (
						<>
							{lastYear !== year ? <h4 className="year">{year}</h4> : ''}
							{data[year].map((work, workIndex) => {
								const out2 =
									lastCompany !== work.company ? (
										<div className="card" key={`{${dataIndex}_${workIndex}`}>
											<img src={work.image} />
											<div className="content">
												<div className="title">{work.company}</div>
												<div className="text">{work.content}</div>
											</div>
										</div>
									) : (
										''
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
