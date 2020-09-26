import React from "react"
import { Icon, Header, List, Popup } from "semantic-ui-react"

const ToolTip = () => {
	return (
		<Popup
			trigger={
				<Icon
					color="blue"
					name="info circle"
					size="large"
					style={{ cursor: "pointer" }}
				/>
			}
		>
			<Header as="h4">Tooltip</Header>
			<List divided relaxed>
				<List.Item>
					<List.Icon
						name="clock"
						size="large"
						verticalAlign="middle"
						color="teal"
					/>
					<List.Content>
						<List.Header>Date/Time</List.Header>
						<List.Description>
							Will be assumed by your browser, but you can change this with the{" "}
							<Icon name="x" /> and <Icon name="calendar outline" />
							icons
						</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon
						name="map pin"
						size="large"
						verticalAlign="middle"
						color="red"
					/>
					<List.Content>
						<List.Header>Origin Timezone</List.Header>
						<List.Description>
							Will be assumed by moment.js and/or your browser - you cannot
							change this at this time
						</List.Description>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name="target" size="large" verticalAlign="middle" />
					<List.Content>
						<List.Header>Target Timezone</List.Header>
						<List.Description>Select using the dropdown menu</List.Description>
					</List.Content>
				</List.Item>
			</List>
		</Popup>
	)
}

export default ToolTip
