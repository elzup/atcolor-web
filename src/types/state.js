// @flow
import type { State as QuestionById } from '../containers/QuestionById/reducer'
import type { State as QuestionsContainer } from '../containers/QuestionsContainer/reducer'
import type { State as UserById } from '../containers/UserById/reducer'
import type { State as UsersContainer } from '../containers/UsersContainer/reducer'

export type State = {
	QuestionById: QuestionById,
	QuestionsContainer: QuestionsContainer,
	UserById: UserById,
	UsersContainer: UsersContainer,
}
