import moment from "moment-timezone"

export const dropdownOptions = moment.tz.names().map((item) => {
	return { key: item, text: item, value: item }
})

export const getOriginTimeString = (originTime, destinationTimezone) => {
	return moment.tz(originTime, destinationTimezone)
}

export const getTimeOffsets = (zone, time) => {
	return moment.tz.zone(zone).utcOffset(time)
}
