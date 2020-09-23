import React from "react"
import { Button, Grid, Header, Divider } from "semantic-ui-react"
import PageFooter from "../reusable-components/PageFooter"
import "../../LandingPage.css"

import { Link } from "react-router-dom"

const LandingPage = () => {
	return (
		<div className="background-image">
			<Grid
				textAlign="center"
				style={{ height: "100vh" }}
				verticalAlign="middle"
			>
				<Grid.Column style={{ maxWidth: 600 }}>
					<Header
						as="h1"
						inverted
						style={{ fontSize: "4em", marginBottom: "0.5em" }}
					>
						Timezone Converter{" "}
						<Header.Subheader style={{ fontSize: "2rem", marginTop: "1rem" }}>
							A simple timezone conversion tool built with React.js and
							Moment.js
						</Header.Subheader>
					</Header>

					<Button size="massive" color="teal" as={Link} to="/convert">
						Get Started
					</Button>
					<Divider hidden />
					<Divider hidden />
					<PageFooter inverted />
				</Grid.Column>
			</Grid>
		</div>
	)
}

export default LandingPage
