// @flow
import type { State } from '../../types'
import * as selectors from './selectors'

const state: $Shape<State> = {
	UserById: {
		'36': {
			id: 36,
			username: 'hoge',
			totalPoint: 2,
			lastSolvedAt: '2017-11-14T02:43:04.616Z',
			solvedQuestions: [2],
		},
		'37': {
			id: 37,
			username: 'fuga',
			totalPoint: 2,
			lastSolvedAt: '2017-11-14T02:43:37.661Z',
			solvedQuestions: [2],
		},
		'38': {
			id: 38,
			username: 'a',
			totalPoint: 1,
			lastSolvedAt: '2017-11-14T02:49:20.710Z',
			solvedQuestions: [2],
		},
		'39': {
			id: 39,
			username: 'b',
			totalPoint: 59,
			lastSolvedAt: '2017-11-15T12:15:30.814Z',
			solvedQuestions: [1, 2, 3, 4, 5, 6, 7, 8],
		},
		'40': {
			id: 40,
			username: 'c',
			totalPoint: 1,
			lastSolvedAt: '2017-11-14T03:08:54.606Z',
			solvedQuestions: [2],
		},
	},
}

test('Works point order', () => {
	expect(selectors.getUsersOrderByPoint(state)).toEqual([
		{
			id: 39,
			username: 'b',
			totalPoint: 59,
			lastSolvedAt: '2017-11-15T12:15:30.814Z',
			solvedQuestions: [1, 2, 3, 4, 5, 6, 7, 8],
		},
		{
			id: 36,
			username: 'hoge',
			totalPoint: 2,
			lastSolvedAt: '2017-11-14T02:43:04.616Z',
			solvedQuestions: [2],
		},
		{
			id: 37,
			username: 'fuga',
			totalPoint: 2,
			lastSolvedAt: '2017-11-14T02:43:37.661Z',
			solvedQuestions: [2],
		},
		{
			id: 38,
			username: 'a',
			totalPoint: 1,
			lastSolvedAt: '2017-11-14T02:49:20.710Z',
			solvedQuestions: [2],
		},
		{
			id: 40,
			username: 'c',
			totalPoint: 1,
			lastSolvedAt: '2017-11-14T03:08:54.606Z',
			solvedQuestions: [2],
		},
	])
})
