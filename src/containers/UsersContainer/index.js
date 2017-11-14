// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import _ from 'lodash'

import type { State, User } from '../../types'
import { Wrapper, Header } from '../../components'

import styled from 'styled-components'

const Cell = styled.div`
	margin-bottom: 20px;
	max-width: 400px;
`
const Row = styled.div`
	display: flex;
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
				<table border="1" style={{}}>
					<tr>
						<th />
						{props.qids.map(qid => <th>Q{qid}</th>)}
					</tr>
					{props.users.map(user => {
						return (
							<tr>
								<th>
									<Cell>
										<Row>
											<Name>{user.username}</Name>
											<span>{user.totalPoint}pt</span>
										</Row>
										<Row>
											<div>
												<Label active={user.twitter}>
													twitter: {user.twitter}
												</Label>
												<Label active={user.language}>
													language: {user.language}
												</Label>
											</div>
										</Row>
									</Cell>
								</th>
								{props.qids.map(qid => (
									<td>{user.solvedQuestions.indexOf(qid) > -1 ? 'o' : 'x'}</td>
								))}
							</tr>
						)
					})}
				</table>
			</Wrapper>
		)
	}
}

const ms = (state: State) => ({
	users: _.sortBy(_.mapValues(state.UserById), p => -p.totalPoint),
	qids: _.values(state.QuestionById).map(q => q.qid),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
