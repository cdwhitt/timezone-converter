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
import { now, dropdownOptions } from "./helpers"

const TimezoneContainer = () => {
	const [myZone, setMyZone] = useState(moment.tz.guess())
	const [origin, setOrigin] = useState(
		new Date(moment.tz(moment().utc().format()))
	)

	const [target, setTarget] = useState("")
	const [convertedTime, setConvertedTime] = useState("")

	const resetCurrentTime = () => {
		setMyZone(moment.tz.guess())
		setOrigin(new Date(moment.tz(moment().utc().format())))
		setTarget("")
	}

	const handleSetZone = (event, { value }) => {
		setMyZone(value)
	}

	const handleSetTarget = (event, { value }) => {
		setTarget(value)
	}

	console.log(origin, "ORIGIN")
	console.log(myZone, "MY ZONE")
	console.log(target, "TARGET")

	let here = moment.tz(origin, myZone)
	let destination = here.clone().tz(target || myZone)

	console.log(destination.format(), "CONVERTED TIME")

	return (
		<Segment>
			<Header as="h1" icon>
				<Icon name="clock outline" color="blue" />
				Timezone Converter
				<Header.Subheader>
					Enter a date and time and select a timezone you wish to convert to
				</Header.Subheader>
			</Header>
			<Container>
				<DateTimePicker onChange={setOrigin} value={origin} />
				<Button onClick={resetCurrentTime} color="blue">
					Reset to Current
				</Button>
			</Container>
			<Dropdown
				placeholder="Select Your Timzone"
				fluid
				search
				value={myZone}
				onChange={handleSetZone}
				selection
				options={dropdownOptions}
			/>
			<Dropdown
				placeholder="Select Target Timzone"
				fluid
				search
				value={target}
				onChange={handleSetTarget}
				selection
				options={dropdownOptions}
			/>

			<p>
				The current date and time for your selection is:{" "}
				{destination.format("MMMM Do YYYY, h:mm a")}
			</p>
		</Segment>
	)
}

export default TimezoneContainer
