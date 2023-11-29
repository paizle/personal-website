import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const offsets = {
	'/projects': 210,
	'/work': 220,
}

function findPos(obj) {
	let curleft = 0,
		curtop = 0

	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		} while ((obj = obj.offsetParent))
		return [curleft, curtop]
	}
}

const useLocationHash = () => {
	let location = useLocation()
	useEffect(() => {
		let hash = location.hash
		hash = hash?.length ? hash.slice(1) : ''
		if (hash) {
			const selector = `[name="${hash}"]`
			const element = document.querySelector(selector)
			const main = document.querySelector('main')
			//const body = document.querySelector('body')

			const position = findPos(element)

			//console.log(position)

			//debugger
			//main.scrollTo(0, 0)

			//debugger
			//main.scrollTo(0, position[1])

			//main.scrollTo(0, position[1] - offsets[location.pathname])
			//main.scrollTo(0, position[1])
			//debugger

			//element?.scrollIntoView(true)
			//console.log(main.scrollTop)
			//console.log("*", window.scrollY, main.scrollTop)
			//main.scrollTo(0, main.scrollTop - offsets[location.pathname])
			main.scrollTo(0, position[1] - offsets[location.pathname])
			//main.scrollTo(0, position[1])

			//window.scroll(0, main.scrollTop - offsets[location.pathname])

			//debugger

			//main.scrollTo(0, main.scrollTop - offsets[location.pathname])
			//body.scrollTo(0, 0)
			//window.scroll(0, 0)
		} else {
			//main.scrollTo(0, 0)
		}

		//window.scroll(0, 0)
	}, [location])
}

export default useLocationHash
