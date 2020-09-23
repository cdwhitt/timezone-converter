import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import "./App.css"
import LandingPage from "./components/LandingPage/LandingPage"
import TimezoneContainer from "./components/TimezoneContainer/TimezoneContainer"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/convert" component={TimezoneContainer} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
