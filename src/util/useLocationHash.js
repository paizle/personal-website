import React from 'react'
import { useLocation } from 'react-router-dom'

const useLocationHash = () => {
	let location = useLocation()

	React.useEffect(() => {
		const hash = location.hash.length ? location.hash.slice(1) : ''
		if (hash) {
			const element = document.querySelector(`a[id="${hash}"]`)
			element?.scrollIntoView({ block: 'start' })
		} else {
			setTimeout(() => window.scrollTo(0, 0), 10)
		}
	}, [location])
}

export default useLocationHash
