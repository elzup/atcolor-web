import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from '../../components/Home'

const Pixels = () => (
	<div>
		<h2>Pixels</h2>
	</div>
)

const Questions = ({ match }) => (
	<div>
		<h2>Questions</h2>
	</div>
)

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/pixels">pixels</Link>
				</li>
				<li>
					<Link to="/questions">Questions</Link>
				</li>
			</ul>

			<hr />

			<Route exact path="/" component={Home} />
			<Route path="/pixels" component={Pixels} />
			<Route path="/questions" component={Questions} />
		</div>
	</Router>
)
export default App
