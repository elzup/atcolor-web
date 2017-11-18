// @flow
import type { State, User } from '../../types'

export function getUsersOrderByPoint(state: State): User[] {
	const users = Object.values(state.UserById)
	users.sort((a, b) => {
		const pd = b.totalPoint - a.totalPoint
		if (pd !== 0) {
			return pd
		}
		return b.lastSolvedAt < a.lastSolvedAt ? 1 : -1
	})
	return users
}
