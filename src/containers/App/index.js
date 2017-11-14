import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import styled from 'styled-components'

import Home from '../QuestionsContainer'
import Users from '../UsersContainer'

const LinkList = styled.ul`
	display: flex;
`

const LinkItem = styled.li`
	font-size: 1.5em;
	margin: 0 20px;
`

const Title = styled.h3`
	padding: 0;
	margin: 0;
`

const Pixels = () => (
	<div>
		<h2>Pixels</h2>
		<p>Coming Soon</p>
	</div>
)

const StyledLink = styled.span`
	color: #a500bd;
	text-decoration: none !important;
`

const ExLink = ({ to, label }) => (
	<Link to={to}>
		<StyledLink>{label}</StyledLink>
	</Link>
)

const App = () => (
	<Router>
		<div>
			<LinkList>
				<LinkItem>
					<Title>AtColor</Title>
				</LinkItem>
				<LinkItem>
					<ExLink to="/" label="Home" />
				</LinkItem>
				<LinkItem>
					<ExLink to="/users" label="Users" />
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
