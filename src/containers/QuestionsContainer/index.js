// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import QuestionItem from '../QuestionById/QuestionItem'
import _ from 'lodash'

import type { State } from '../../types'

type Props = {
	questions: number[],
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>{props.questions.map(id => <QuestionItem questionId={id} />)}</div>
		)
	}
}

const ms = (state: State) => ({
	questions: _.values(state.QuestionsContainer),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
