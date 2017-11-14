// @flow
import type { ThunkAction } from '../../types'
import { receiveQuestions, flagIsHere } from '../QuestionsContainer/actions'
import { receiveUsers } from '../UsersContainer/actions'
import * as client from '../../api/client'

export function loadQuestions(): ThunkAction {
	return async dispatch => {
		dispatch(flagIsHere('FLAG_FLOW_REDUX_PERSIST'))
		const { questions, users } = await client.getQuestions()
		dispatch(receiveQuestions(questions))
		dispatch(receiveUsers(users))
	}
}
