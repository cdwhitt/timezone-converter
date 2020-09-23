import React from "react"
import { Message, List } from "semantic-ui-react"

const ConvertedTimeDisplay = ({
	incompleteFields,
	destinationTime,
	offsetDifference,
}) => {
	return (
		<Message info>
			{!incompleteFields ? (
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
							{offsetDifference > 0 && "+"}
							{offsetDifference} hours
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
