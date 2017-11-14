// @flow
import type { ThunkAction } from '../../types'
import { receiveQuestions } from '../QuestionsContainer/actions'
import { receiveUsers } from '../UsersContainer/actions'
import * as client from '../../api/client'

export function loadQuestions(): ThunkAction {
	return async dispatch => {
		const res = await client.getQuestions().catch(err => {
			// TODO:
			console.log(err)
			return false
		})
		dispatch(receiveQuestions(res.questions))
		dispatch(receiveUsers(res.users))
	}
}
