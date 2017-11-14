// @flow
import type { Question } from '../../types'

export const RECEIVE_QUESTIONS: 'QuestionsContainer/RECEIVE_QUESTIONS' =
	'QuestionsContainer/RECEIVE_QUESTIONS'

export const Actions = {
	RECEIVE_QUESTIONS,
}

export type ReceiveQuestions = {
	type: typeof RECEIVE_QUESTIONS,
	questions: Question[],
}

export type Action = ReceiveQuestions
