// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = number[]

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.FLAG_IS_HERE:
			return state

		case Actions.RECEIVE_QUESTIONS:
			return [...state, ...action.questions.map(u => u.id)]

		default:
			return state
	}
}
