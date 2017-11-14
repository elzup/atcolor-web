// @flow
import { combineReducers } from './config'
import ItemsContainer from './containers/ItemsContainer/reducer'
import UserById from './containers/UserById/reducer'
import UsersContainer from './containers/UsersContainer/reducer'

export default combineReducers({
	ItemsContainer,
	UserById,
	UsersContainer,
})
