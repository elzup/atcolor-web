// @flow
import type { Action, Question } from '../../types'
import { Actions } from '../QuestionsContainer/actionTypes'

export type State = { [id: number]: Question }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions.reduce((obj, question) => {
					obj[question.id] = question
					return obj
				}, {}),
			}
		default:
			return state
	}
}
