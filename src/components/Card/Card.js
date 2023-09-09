import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ imgSrc, title, children }) => {
	return (
		<article className="Card">
			<div className="detail-image">
				<img src={imgSrc} alt={title} className="detail" />
			</div>
			<div className="content">
				<h3 className="title">{title}</h3>
				<div className="children">{children}</div>
			</div>
		</article>
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
