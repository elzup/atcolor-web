// @flow
import { combineReducers } from './config'
import QuestionById from './containers/QuestionById/reducer'
import QuestionsContainer from './containers/QuestionsContainer/reducer'
import UserById from './containers/UserById/reducer'
import UsersContainer from './containers/UsersContainer/reducer'

export default combineReducers({
	QuestionById,
	QuestionsContainer,
	UserById,
	UsersContainer,
})
