// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import styled from 'styled-components'
import type { State, User } from '../../types'

type OProps = {
	solverIds: number[],
}

type Props = {
	solvers: User[],
}

const Wrap = styled.div`
	word-wrap: break-word;
`

const Label = styled.span`
	padding: 0 2px;
`

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<Wrap>
				{props.solvers.map(solver => {
					if (!solver) {
						return null
					}
					return <Label>{solver.username + ' '}</Label>
				})}
			</Wrap>
		)
	}
}

const ms = (state: State, ownProps: OProps) => ({
	solvers: ownProps.solverIds.map(id => state.UserById[id]),
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
