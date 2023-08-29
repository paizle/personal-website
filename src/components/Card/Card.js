import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ imgSrc, title, children }) => {
	return (
		<div className="Card">
			<img src={imgSrc} alt={title} />
			<div className="content">
				<div className="title">{title}</div>
				<div className="children">{children}</div>
			</div>
		</div>
	)
}

Card.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
}

export default Card
