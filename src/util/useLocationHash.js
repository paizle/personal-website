import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useLocationHash = () => {
	let location = useLocation()
	useEffect(() => {
		let hash = location.hash
		hash = hash?.length ? hash.slice(1) : ''
		if (hash) {
			const selector = `[name="${hash}"]`
			const element = document.querySelector(selector)
			element?.scrollIntoView({
				alignToTop: true,
				block: 'center',
				inline: 'nearest',
				behavior: 'smooth',
			})
		}
	}, [location])
}

export default useLocationHash
