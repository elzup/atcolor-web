// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'

import QuestionItem from '../QuestionById/QuestionItem'
import { Wrapper, Header } from '../../components'
import type { State } from '../../types'

type Props = {
	questions: number[],
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<Wrapper>
				<Header>
					<h1>Questions</h1>
					<p>
						あなたの好きな言語で REST API を叩いてみよう。
						<br /> Host: api-atcolor.cps.im.dendai.ac.jp
					</p>
				</Header>
				<div>{props.questions.map(id => <QuestionItem questionId={id} />)}</div>
			</Wrapper>
		)
	}
}

const ms = (state: State) => ({
	questions: _.values(state.QuestionsContainer),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
