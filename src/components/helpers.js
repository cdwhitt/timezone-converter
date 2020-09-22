import moment from "moment-timezone"

export const now = moment.tz(moment().utc().format())

export const dropdownOptions = moment.tz.names().map((item) => {
	return { key: item, text: item, value: item }
})
