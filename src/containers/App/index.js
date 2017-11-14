import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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

const HLink = props => <Link {...props} activeClassName="is-active" />

const Pixels = () => (
	<div>
		<h2>Pixels</h2>
		<p>Coming Soon</p>
	</div>
)

const App = () => (
	<Router>
		<div>
			<LinkList>
				<LinkItem>
					<HLink to="/">Home</HLink>
				</LinkItem>
				<LinkItem>
					<HLink to="/users">Users</HLink>
				</LinkItem>
				<LinkItem>
					<HLink to="/pixels">Pixels</HLink>
				</LinkItem>
			</LinkList>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/users" component={Users} />
			<Route path="/pixels" component={Pixels} />
		</div>
	</Router>
)
export default App
