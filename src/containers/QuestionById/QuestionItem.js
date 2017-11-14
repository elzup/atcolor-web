// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Question } from '../../types'
import SolverContainer from '../SolverContainer'

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
			<div>
				<p>{props.question.title}</p>
				<p>{props.question.description}</p>
				<div>
					<SolverContainer solverIds={props.question.solvers} />
				</div>
			</div>
		)
	}
}

const ms = (state: State, ownProps: OProps) => ({
	question: state.QuestionById[ownProps.questionId],
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
