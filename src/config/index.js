// @flow

import { combineReducers as _cr } from 'redux'
import type { Reducer } from '../types'
const { NODE_ENV, REACT_APP_HOGE, REACT_APP_FUGA_URL } = process.env

if (REACT_APP_HOGE === null || REACT_APP_FUGA_URL === null || !NODE_ENV) {
	console.error('Configuration not completed. must setup envioraments.')
	console.error(process.env)
}

type Config = {
	+isDev: boolean,
	+admin: {
		+name: string,
		+countMax: number,
	},
}
const isDev = NODE_ENV === 'development'

const configDevelopment = {
	admin: {
		name: 'admin',
		countMax: 100,
	},
}
const configProduction = {
	admin: {
		name: 'proadmin',
		countMax: 100,
	},
}

const config: Config = {
	isDev,
	...(isDev ? configDevelopment : configProduction),
}

export function combineReducers(reducers: Object): Reducer {
	return _cr(reducers)
}

export default config
