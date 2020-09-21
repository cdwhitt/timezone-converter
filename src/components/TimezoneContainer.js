import React, { useState } from "react"
import DateTimePicker from "react-datetime-picker"

import {
	Header,
	Container,
	Segment,
	Icon,
	Button,
	Dropdown,
} from "semantic-ui-react"
import moment from "moment-timezone"

const TimezoneContainer = () => {
	const [origin, setOrigin] = useState(new Date())

	const [target, setTarget] = useState(moment.tz.names())
	const [convertedTime, setConvertedTime] = useState("")

	const resetCurrentTime = () => {
		setOrigin(new Date())
	}

	console.log(target, "NAMES")

	return (
		<Segment>
			<Header as="h1" icon>
				<Icon name="clock outline" color="blue" />
				Timezone Converter
				<Header.Subheader>
					Convert your timezone to another using the form below:
				</Header.Subheader>
			</Header>
			<Container>
				<DateTimePicker onChange={setOrigin} value={origin} />
				<Button onClick={resetCurrentTime} color="blue">
					Reset to Current
				</Button>
			</Container>
		</Segment>
	)
}

export default TimezoneContainer
