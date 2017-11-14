// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, User } from '../../types'

type OProps = {
	solverIds: number[],
}

type Props = {
	solvers: User[],
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>
				{props.solvers.map(solver => {
					if (!solver) {
						return null
					}
					return <span>{solver.username}</span>
				})}
			</div>
		)
	}
}

const ms = (state: State, ownProps: OProps) => ({
	solvers: ownProps.solverIds.map(id => state.UserById[id]),
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
