// @flow
import type { ThunkAction } from '../../types'
import { receiveQuestions } from '../QuestionsContainer/actions'
import { receiveUsers } from '../UsersContainer/actions'
import * as client from '../../api/client'

export function loadQuestions(): ThunkAction {
	console.log('hoge')
	return async dispatch => {
		const res = await client.getQuestions()
		debugger
		receiveQuestions(res.questions)
		receiveUsers(res.users)
	}
}
