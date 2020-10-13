import React from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const containerStyle = {
	width: "400px",
	height: "400px",
}

const Map = ({ center }) => {
	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds()
		map.fitBounds(bounds)
		setMap(map)
	}, [])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, [])

	return (
		<LoadScript googleMapsApiKey="AIzaSyDh9Cw14d3xcgzIjUfZlnGZPi67ItRp6Gk">
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</LoadScript>
	)
}

export default React.memo(Map)
