import React from "react"

import { Icon, Divider } from "semantic-ui-react"

const PageFooter = () => {
	return (
		<>
			<Divider horizontal>Like what I've built? Connect with me on</Divider>
			<a
				href="http://www.github.com/cdwhitt"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon name="github" size="large" color="black" />
			</a>
			<a
				href="http://www.linkedin.com/in/casey-whittaker"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon name="linkedin" color="blue" size="large" />
			</a>

			<a
				href="http://www.twitter.com/theCaseyWhitt"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon name="twitter" color="teal" size="large" />
			</a>
		</>
	)
}

export default PageFooter
