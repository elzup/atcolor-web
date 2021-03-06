// @flow

import camelcaseKeysRecursive from 'camelcase-keys-recursive'
import { normalizeQuestions } from './normalize'
import request from 'superagent'

import type { User, Question } from '../types'

const host = 'http://api-atcolor.cps.im.dendai.ac.jp'
// const host = 'http://localhost:3001'
// const TIMEOUT = 5000

const baseHeaders = {
	'Content-Type': 'application/json',
}

type GetQuestionsCallback = {
	questions: Question[],
	users: User[],
}

export async function getQuestions(): Promise<GetQuestionsCallback> {
	const questionsRequest = request.get(host + '/v1/q').set(baseHeaders)
	const res = await new Promise((resolve, reject) => {
		questionsRequest.end((err, res) => {
			resolve(err || res)
		})
	})

	const normalizedData = normalizeQuestions(res.body)
	const camelizedData: {
		entities: {
			questions: { [id: number]: Question },
			users: { [id: number]: User },
		},
	} = camelcaseKeysRecursive(normalizedData, { deep: true })
	const { questions, users } = camelizedData.entities

	Object.values(questions).forEach(q => {
		q.solvers.forEach(id => {
			if (!users[id].solvedQuestions) {
				users[id].solvedQuestions = []
			}
			users[id].solvedQuestions.push(q.qid)
		})
	})
	return {
		questions: Object.values(questions),
		users: Object.values(users),
	}
}
