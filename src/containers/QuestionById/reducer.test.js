// @flow
import reducer, { initialState } from './reducer'
import type { Question } from '../../types'
import * as actions from '../QuestionsContainer/actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

var q: Question = { description: '', id: 0, solvers: [], title: '' }

test('handle RECEIVE_QUESTIONS', () => {
	expect(reducer(initialState, actions.receiveQuestions([q]))).toEqual({
		'0': q,
	})
})
