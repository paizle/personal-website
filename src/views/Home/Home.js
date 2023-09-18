import React from 'react'
import { Link } from 'react-router-dom'
import { structure } from '../../routes/routes'
import './Home.scss'

export default function Home() {
	return (
		<div className="Home">
			<h4>Greetings,</h4>

			<img src="/images/matthew-allan-macpherson.jpg" className="me" />

			<p>
				I&apos;m Matthew MacPherson, and welcome to my professional portfolio
				website, where I proudly showcase my extensive experience and skills in the
				field of full stack development. If you wish to connect with me, please
				visit my <Link to={structure.path}>contact</Link> page, and I will promptly
				receive your message via email.
			</p>

			<p>Here&apos;s a glimpse of what I bring to the table:</p>

			<h4>Over a Decade of Full Stack Expertise:</h4>
			<ul>
				<li>
					I have a rich history of working in collaborative team environments,
					thriving on code reviews and constructive feedback. My proactive approach
					involves detailed discussions, strategic planning, and a keen focus on
					ensuring alignment within the team.
				</li>
				<li>
					Effective communication is a cornerstone of my work ethic, and I
					consistently maintain open channels of communication with my colleagues. My
					familiarity with agile methodologies like Scrum and participation in
					standup meetings ensure project success.
				</li>
			</ul>
			<h4>Front End Excellence:</h4>
			<ul>
				<li>
					I have a strong affinity for front end development, driven by a passion for
					creating exceptional user experiences. My proficiency extends to crafting
					user interfaces from designs, with React JS being my preferred library.
				</li>
				<li>
					JavaScript, HTML, and CSS are second nature to me, and I&apos;m well-versed
					in responsive design and adept at resolving cross-browser compatibility
					issues.
				</li>
				<li>
					My toolkit includes various front end technologies such as TypeScript,
					jQuery, Sass, Tailwind CSS, Bootstrap, and Angular 2.
				</li>
			</ul>
			<h4>Back End Brilliance</h4>
			<ul>
				<li>
					Back end development holds a special place in my skill set. My experience
					with Java has honed my ability to adhere to SOLID design principles,
					ensuring robust and maintainable code.
				</li>
				<li>
					I possess a solid understanding of MVC frameworks such as Laravel, Play,
					and Spring.
				</li>
				<li>
					Database design and SQL are in my wheelhouse, and I&apos;m proficient in
					working with Object-Relational Mapping frameworks like Hibernate and
					Eloquent.
				</li>
			</ul>

			<p>
				With my extensive background in full stack development and a commitment to
				delivering high-quality solutions, I am a valuable asset to any team or
				project. Please explore my portfolio further to gain deeper insights into my
				work. If you are interested in discussing potential collaborations or have
				any inquiries, please don&apos;t hesitate to reach out through my contact
				page.
			</p>

			<p>Thank you for visiting, and I look forward to connecting with you.</p>

			<p>
				Best regards,
				<br />
				Matthew MacPherson
			</p>
		</div>
	)
}
