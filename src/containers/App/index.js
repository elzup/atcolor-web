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
	margin-left: 10px;
`

const ButtonWrap = styled.div`
	color: purple !important;
`
const HLink = props => (
	<ButtonWrap>
		<Link {...props}>{props.name}</Link>
	</ButtonWrap>
)

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
	<Link prefetch to={to} passHref>
		<StyledLink>{label}</StyledLink>
	</Link>
)

const App = () => (
	<Router>
		<div>
			<LinkList>
				<LinkItem>
					<ExLink to="/" label="Home" />
				</LinkItem>
				<LinkItem>
					<ExLink to="/users" label="Users" />
				</LinkItem>
				<LinkItem>
					<ExLink to="/pixels" label="Pixels" />
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
