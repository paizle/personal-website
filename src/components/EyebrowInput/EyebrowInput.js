import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './EyebrowInput.scss'

const EyebrowInput = (props) => {
	const { label, name, type } = props
	const [value, setValue] = useState('')
	const [hasFocus, setFocus] = useState(false)
	const inputRef = useRef(null)

	const renderInput = () => {
		if (type === 'textarea') {
			return (
				<textarea
					name={name}
					type="text"
					ref={inputRef}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			)
		} else {
			return (
				<input
					name={name}
					type="text"
					ref={inputRef}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			)
		}
	}

	return (
		<div className={`EyebrowInput ${value || hasFocus ? 'is-raised' : ''}`}>
			<label>
				<span className="label-text">{label}</span>
				{renderInput()}
			</label>
		</div>
	)
}

EyebrowInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string,
	type: PropTypes.string,
}

export default EyebrowInput
