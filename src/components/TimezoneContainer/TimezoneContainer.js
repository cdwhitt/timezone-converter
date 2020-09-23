import React, { useState } from "react"
import DateTimePicker from "react-datetime-picker"
import { Header, Segment, Icon, Button, Grid, Divider } from "semantic-ui-react"
import ToolTip from "./ToolTip"
import DropdownInputs from "./DropdownInputs"
import ConvertedTimeDisplay from "./ConvertedTimeDisplay"
import PageFooter from "../reusable-components/PageFooter"
import moment from "moment-timezone"
import { getOriginTimeString, getTimeOffsets } from "./helpers"

const TimezoneContainer = () => {
	//STATE
	const [myZone, setMyZone] = useState(moment.tz.guess())
	const [originTime, setOriginTime] = useState(
		new Date(moment.tz(moment().utc().format()))
	)
	const [targetZone, setTargetZone] = useState("")

	//VARIABLES
	const incompleteFields = !originTime || !myZone || !targetZone
	const destinationTime = getOriginTimeString(originTime, myZone)
		.clone()
		.tz(targetZone || myZone)
	const originZoneOffset = getTimeOffsets(myZone, originTime)
	const targetZoneOffset = getTimeOffsets(targetZone || myZone, originTime)
	const offsetDifference = (originZoneOffset - targetZoneOffset) / 60

	//EVENT HANDLERS
	const handleSetMyZone = (event, { value }) => {
		setMyZone(value)
	}

	const handleSetTargetZone = (event, { value }) => {
		setTargetZone(value)
	}
	const resetCurrentTime = () => {
		setMyZone(moment.tz.guess())
		setOriginTime(new Date(moment.tz(moment().utc().format())))
		setTargetZone("")
	}

	return (
		<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header icon as="h2" color="teal" textAlign="center">
					<Icon name="clock outline" color="teal" /> Timezone Converter
					<Header.Subheader></Header.Subheader>
				</Header>

				<Segment stacked>
					Date/Time:
					<br />
					<DateTimePicker onChange={setOriginTime} value={originTime} />
					<ToolTip />
					<Divider hidden />
					<DropdownInputs
						myZone={myZone}
						handleSetMyZone={handleSetMyZone}
						targetZone={targetZone}
						handleSetTargetZone={handleSetTargetZone}
					/>
					<Divider hidden />
					<Button color="teal" fluid size="large" onClick={resetCurrentTime}>
						Reset
					</Button>
				</Segment>

				<ConvertedTimeDisplay
					incompleteFields={incompleteFields}
					destinationTime={destinationTime}
					offsetDifference={offsetDifference}
				/>
				<PageFooter />
			</Grid.Column>
		</Grid>
	)
}

export default TimezoneContainer
