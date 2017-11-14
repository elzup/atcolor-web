// @flow
import * as React from 'react'
import styled from 'styled-components'

import { connect, type Connector } from 'react-redux'
import type { State, Question } from '../../types'
import SolverContainer from '../SolverContainer'

import { Wrapper } from '../../components'

const Row = styled.div`
	display: flex;
	justify-content: space-between;
`

const Title = styled.h3`
	padding: 0;
	margin: 0;
`

const Qnum = styled.h3`
	padding: 0 10px 0 0;
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
			<Wrapper>
				<Row>
					<Row>
						<Qnum>Q{props.question.qid}.</Qnum>
						<Title>{props.question.title}</Title>
						<Info>{props.question.description}</Info>
					</Row>
					<Info>{props.question.point}pt</Info>
				</Row>
				<div>
					<SolverContainer solverIds={props.question.solvers} />
				</div>
			</Wrapper>
		)
	}
}

const ms = (state: State, ownProps: OProps) => ({
	question: state.QuestionById[ownProps.questionId],
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
