// @flow

import camelcaseKeysRecursive from 'camelcase-keys-recursive'
import { normalizeQuestions } from './normalize'
import request from 'superagent'
import _ from 'lodash'

import type { User, Question } from '../types'

const host = 'http://api-atcolor.cps.im.dendai.ac.jp/admin/admin_users/3'
const TIMEOUT = 5000

const baseHeaders = {
	'Content-Type': 'application/json',
}

type GetQuestionsCallback = (res: {
	questions: Question[],
	users: User[],
}) => void

export async function getQuestions(): Promise<GetQuestionsCallback> {
	const questionsRequest = request.get(host + '/v1/questions').set(baseHeaders)
	const res = await new Promise((resolve, reject) => {
		questionsRequest.end((err, res) => {
			resolve(err || res)
		})
	})

	const normalizedData = normalizeQuestions(res.body)
	const camelizedData = camelcaseKeysRecursive(normalizedData, { deep: true })

	return {
		questions: [],
		users: [],
		..._.mapValues(camelizedData.entities, _.values),
	}
}
