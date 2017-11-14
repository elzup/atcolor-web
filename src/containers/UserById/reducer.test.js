// @flow
import reducer, { initialState } from './reducer'
import type { User } from '../../types'
import * as actions from '../UsersContainer/actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

var u: User = {
	id: 0,
	language: 'js',
	solved_questions: [],
	twitter: 'hoge',
	username: 'fuga',
}
test('handle RECEIVE_USERS', () => {
	expect(reducer(initialState, actions.receiveUsers([u]))).toEqual({ '0': u })
})
