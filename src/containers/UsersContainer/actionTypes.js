// @flow
import type { User } from '../../types'

export const RECEIVE_USERS: 'UsersContainer/RECEIVE_USERS' =
	'UsersContainer/RECEIVE_USERS'

export const Actions = {
	RECEIVE_USERS,
}

export type ReceiveUsers = {
	type: typeof RECEIVE_USERS,
	users: User[],
}

export type Action = ReceiveUsers
