// @flow
import * as React from 'react'
import styled from 'styled-components'

import { connect, type Connector } from 'react-redux'
import type { State, Question } from '../../types'
import SolverContainer from '../SolverContainer'

const Wrap = styled.div`
	width: 700px;
`
const Row = styled.div`
	display: flex;
	justify-content: space-between;
`

const Title = styled.h3`
	padding: 0;
	margin: 0;
`

const Info = styled.span`
	padding: 0 5px;
`

type OProps = {
	questionId: number,
}

type Props = {
	question: Question,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<Wrap>
				<Row>
					<Row>
						<Title>{props.question.title}</Title>
						<Info>{props.question.description}</Info>
					</Row>
					<Info>{props.question.point}pt</Info>
				</Row>
				<div>
					<SolverContainer solverIds={props.question.solvers} />
				</div>
			</Wrap>
		)
	}
}

const ms = (state: State, ownProps: OProps) => ({
	question: state.QuestionById[ownProps.questionId],
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
