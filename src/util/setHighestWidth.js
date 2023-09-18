const getWidth = (element) =>
	element && window.getComputedStyle(element)?.getPropertyValue('width')

const setAllToHighestWidth = (elements) => {
	const largestWidthElement = elements.reduce((prev, curr) => {
		if (!prev || parseInt(getWidth(curr)) > parseInt(getWidth(prev))) {
			return curr
		}
		return prev
	}, null)
	const largestWidth = getWidth(largestWidthElement)
	elements.forEach((e) => (e.style.width = largestWidth))
}

export default setAllToHighestWidth
