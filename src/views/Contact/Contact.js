import React from 'react'
import EyebrowInput from '../../components/EyebrowInput/EyebrowInput'

import './Contact.scss'

export default function Contact() {
	const submitForm = () => {
		// * todo
	}

	return (
		<main className="Contact">
			<h2 className="page-title">Contact</h2>

			<p>
				Please fill out the contact form below and I will recieve your message via
				email
			</p>

			<form onSubmit={submitForm} method="post">
				<EyebrowInput label="Your Name" />
				<EyebrowInput label="Your Email Address" />
				<EyebrowInput label="Your Phone Number (optional)" />
				<EyebrowInput type="textarea" label="Your Message" />

				<button type="submit">Contact</button>
			</form>
		</main>
	)
}
