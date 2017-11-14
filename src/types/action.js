// @flow
import type { Action as ItemsContainerAction } from '../containers/ItemsContainer/actionTypes'
import type { Action as QuestionsContainerAction } from '../containers/QuestionsContainer/actionTypes'
import type { Action as UsersContainerAction } from '../containers/UsersContainer/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action =
	| ReduxInitAction
	| ItemsContainerAction
	| QuestionsContainerAction
	| UsersContainerAction
