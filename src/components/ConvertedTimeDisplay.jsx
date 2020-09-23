import React from "react"
import { Message, List } from "semantic-ui-react"

import moment from "moment-timezone"

const ConvertedTimeDisplay = ({
	badInput,
	destinationTime,
	originTimeString,
}) => {
	return (
		<Message info>
			{!badInput ? (
				<List>
					<List.Item>
						The current date and time for your selection is:
						<br />
						<b>{destinationTime.format("MMMM Do YYYY, h:mm a")}</b>
					</List.Item>
					<List.Item>
						The difference between origin and target is:
						<br />
						<b>
							{moment
								.utc(
									moment(destinationTime.format("MMMM Do YYYY, h:mm a")).diff(
										moment(originTimeString.format("MMMM Do YYYY, h:mm a"))
									)
								)
								.format("HH:mm:ss")}
						</b>
					</List.Item>
				</List>
			) : (
				<>
					Please select a <b>date/time</b>, <b>origin timezone</b> and{" "}
					<b>target timezone</b>
				</>
			)}
		</Message>
	)
}

export default ConvertedTimeDisplay
