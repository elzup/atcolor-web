// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = number[]

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_USERS:
			return [...state, ...action.users.map(u => u.id)]

		default:
			return state
	}
}
