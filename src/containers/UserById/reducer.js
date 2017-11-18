// @flow
import type { Action, User } from '../../types'
import { Actions } from '../UsersContainer/actionTypes'

export type State = { [id: number | string]: User }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_USERS:
			return {
				...state,
				...action.users.reduce((obj, user) => {
					obj[user.id] = user
					return obj
				}, {}),
			}
		default:
			return state
	}
}
