// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import QuestionItem from '../QuestionById/QuestionItem'
import styled from 'styled-components'

import _ from 'lodash'

import type { State } from '../../types'

const Wrap = styled.div`
	padding: 10px;
`

type Props = {
	questions: number[],
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<Wrap>{props.questions.map(id => <QuestionItem questionId={id} />)}</Wrap>
		)
	}
}

const ms = (state: State) => ({
	questions: _.values(state.QuestionsContainer),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
