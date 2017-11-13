// @flow
import { combineReducers } from './config'
import ItemsContainer from './containers/ItemsContainer/reducer'
import UsersContainer from './containers/UsersContainer/reducer'

export default combineReducers({
	ItemsContainer,
	UsersContainer,
})
