// @flow
import type { Question } from '../../types'

import { RECEIVE_QUESTIONS, FLAG_IS_HERE } from './actionTypes'
import type { ReceiveQuestions, FlagIsHere } from './actionTypes'

export function receiveQuestions(questions: Question[]): ReceiveQuestions {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}
export function flagIsHere(flag: string): FlagIsHere {
	return {
		type: FLAG_IS_HERE,
		flag,
	}
}
