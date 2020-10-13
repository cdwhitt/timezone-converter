import React, { useState } from "react"
import DateTimePicker from "react-datetime-picker"
import { Header, Segment, Icon, Button, Grid, Divider } from "semantic-ui-react"
import ToolTip from "./ToolTip"
import DropdownInputs from "./DropdownInputs"
import ConvertedTimeDisplay from "./ConvertedTimeDisplay"
// import Map from "../Map/Map"
import PageFooter from "../reusable-components/PageFooter"
import moment from "moment-timezone"
// import axios from "axios"
import { getOriginTimeString, getTimeOffsets } from "./helpers"

const TimezoneContainer = () => {
	//STATE
	const [myZone, setMyZone] = useState(moment.tz.guess())
	const [originTime, setOriginTime] = useState(new Date(moment.tz(myZone)))
	const [targetZone, setTargetZone] = useState("")
	// const [center, setCenter] = useState({
	// 	lat: 0,
	// 	lng: 0,
	// })

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

	const handleSetTargetZone = async (event, { value }) => {
		setTargetZone(value)
	}
	const resetCurrentTime = () => {
		setMyZone(moment.tz.guess())
		setOriginTime(new Date(moment.tz(myZone)))
		setTargetZone("")
	}

	// useEffect(() => {
	// 	const fetchMapCoordinates = async () => {
	// 		const { data } = await axios.get(
	// 			`https://maps.googleapis.com/maps/api/geocode/json?address=${targetZone}&key=AIzaSyDh9Cw14d3xcgzIjUfZlnGZPi67ItRp6Gk`
	// 		)

	// 		console.log(data, "WHAT CAN I DO WITH THIS")

	// 		setCenter(data.results[0].geometry.location)
	// 	}

	// 	fetchMapCoordinates()
	// }, [targetZone])

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
				{/* <Map center={center} /> */}
				<PageFooter />
			</Grid.Column>
		</Grid>
	)
}

export default TimezoneContainer
