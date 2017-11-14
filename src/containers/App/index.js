import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton'

import styled from 'styled-components'

import Home from '../QuestionsContainer'
import Users from '../UsersContainer'

const LinkList = styled.ul`
	display: flex;
`

const LinkItem = styled.li`
	font-size: 1.5em;
	margin-left: 10px;
`

const HLink = props => (
	<FlatButton
		primary={true}
		label={props.name}
		containerElement={<Link {...props} />}
	/>
)

const Pixels = () => (
	<div>
		<h2>Pixels</h2>
		<p>Coming Soon</p>
	</div>
)

const App = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Router>
			<div>
				<LinkList>
					<LinkItem>
						<HLink to="/" name="Home" />
					</LinkItem>
					<LinkItem>
						<HLink to="/users" name="Users" />
					</LinkItem>
					<LinkItem>
						<HLink to="/pixels" name="Pixels" />
					</LinkItem>
				</LinkList>

				<hr />

				<Route exact path="/" component={Home} />
				<Route path="/users" component={Users} />
				<Route path="/pixels" component={Pixels} />
			</div>
		</Router>
	</MuiThemeProvider>
)
export default App
