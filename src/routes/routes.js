import React from 'react'
import App from '../App'
import Home from '../views/Home/Home'
import Work from '../views/Work/Work'
import Projects from '../views/Projects/Projects'
import Contact from '../views/Contact/Contact'

export const structure = {
	Home: {
		path: '/',
		element: <Home />,
	},
	Work: {
		path: '/work',
		element: <Work />,
	},
	Projects: {
		path: '/projects',
		element: <Projects />,
	},
	Contact: {
		path: '/contact',
		element: <Contact />,
	},
}

const routes = [
	{
		path: '/',
		element: <App />,
		children: Object.keys(structure).map((e) => structure[e]),
	},
]

export default routes
