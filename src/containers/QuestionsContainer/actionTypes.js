// @flow
import type { Question } from '../../types'

export const RECEIVE_QUESTIONS: 'QuestionsContainer/RECEIVE_QUESTIONS' =
	'QuestionsContainer/RECEIVE_QUESTIONS'
export const FLAG_IS_HERE: 'QuestionsContainer/FLAG_IS_HERE' =
	'QuestionsContainer/FLAG_IS_HERE'

export const Actions = {
	RECEIVE_QUESTIONS,
	FLAG_IS_HERE,
}

export type ReceiveQuestions = {
	type: typeof RECEIVE_QUESTIONS,
	questions: Question[],
}

export type FlagIsHere = {
	type: typeof FLAG_IS_HERE,
	flag: string,
}

export type Action = ReceiveQuestions | FlagIsHere
