import React from "react"
import { Form, Divider } from "semantic-ui-react"
import { dropdownOptions } from "./helpers"

const DropdownInputs = ({
	myZone,
	handleSetMyZone,
	targetZone,
	handleSetTargetZone,
}) => {
	return (
		<>
			<Form.Dropdown
				label="Origin Timezone:"
				placeholder="Select Your Timzone"
				fluid
				search
				value={myZone}
				onChange={handleSetMyZone}
				selection
				options={dropdownOptions}
			/>
			<Divider hidden />
			<Form.Dropdown
				label="Target Timezone:"
				placeholder="Select Target Timzone"
				fluid
				search
				value={targetZone}
				onChange={handleSetTargetZone}
				selection
				options={dropdownOptions}
			/>
		</>
	)
}

export default DropdownInputs
