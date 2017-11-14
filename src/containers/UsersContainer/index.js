// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import _ from 'lodash'

import type { State, User } from '../../types'
import { Wrapper, Header } from '../../components'

import styled from 'styled-components'

const Row = styled.div`
	display: flex;
`

const Label = styled.div`
	padding: 0 5px;
	min-width: 200px;
	color: ${p => (p.active ? 'black' : '#eee')};
`

type Props = {
	users: User[],
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<Wrapper>
				<Header>
					<h1> User List </h1>
				</Header>
				{props.users.map(user => {
					return (
						<div>
							<h3>{user.username}</h3>
							<Row>
								<Label active={user.twitter}>twitter: {user.twitter}</Label>
								<Label active={user.language}>language: {user.language}</Label>
								<span>{user.totalPoint}pt</span>
							</Row>
						</div>
					)
				})}
			</Wrapper>
		)
	}
}

const ms = (state: State) => ({
	users: _.sortBy(_.mapValues(state.UserById), p => -p.totalPoint),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
