// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'

import type { State, User } from '../../types'
import { Wrapper, Header } from '../../components'

import styled from 'styled-components'

const Cell = styled.div`
	margin-bottom: 20px;
	min-width: 250px;
`
const Row = styled.div`
	display: flex;
	justify-content: space-between;
`

const Name = styled.h3`
	padding: 0 5px;
	margin: 0;
`
const Label = styled.div`
	margin-left: 1em;
	padding: 3px 5px;
	color: ${p => (p.active ? 'black' : '#aaa')};
`

const Mark = styled.span`
	padding: 0px 5px;
	font-size: 1.2em;
	color: ${p => (p.active ? '#26dec6' : '#ccc')};
}
`

type Props = {
	users: User[],
	qids: number[],
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
						<Row>
							<Cell>
								<Row>
									<Name>{user.username}</Name>
									<span>{user.totalPoint}pt</span>
								</Row>
								<Row>
									<div>
										<Label active={user.twitter}>twitter: {user.twitter}</Label>
										<Label active={user.language}>
											language: {user.language}
										</Label>
									</div>
								</Row>
							</Cell>
							<div>
								{props.qids.map(qid => {
									const solved = user.solvedQuestions.indexOf(qid) > -1
									return <Mark active={solved}>'✜'</Mark>
								})}
							</div>
						</Row>
					)
				})}
			</Wrapper>
		)
	}
}

const ms = (state: State) => {
	const users = Object.values(state.UserById)
	users.sort((a, b) => b.totalPoint - a.totalPoint)

	return {
		users,
		qids: Object.values(state.QuestionById).map(q => q.qid),
	}
}
const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
