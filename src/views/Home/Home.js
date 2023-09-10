import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<>
			<p>
				Hello. My name is Matthew MacPherson and this is my personal website to
				showcase
				<Link to="/work">companies</Link> I have worked for and{' '}
				<Link to="/projects">projects</Link>I have worked on. If you would like to
				contact me for any reason, please visit my
				<Link to="/contact">contact</Link> page and I will recieve your message via
				email.
			</p>
			<p>
				I have over a decade of experience as a full stack developer. I have worked
				in a team environment on projects as well as projects where I am the sole
				developer.
			</p>
		</>
	)
}
