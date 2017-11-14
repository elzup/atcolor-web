// @flow
import type { Question } from '../../types'

import { RECEIVE_QUESTIONS } from './actionTypes'
import type { ReceiveQuestions } from './actionTypes'

export function receiveQuestions(questions: Question[]): ReceiveQuestions {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}
