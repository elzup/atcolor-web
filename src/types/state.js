// @flow
import type { State as ItemsContainer } from '../containers/ItemsContainer/reducer'
import type { State as UsersContainer } from '../containers/UsersContainer/reducer'

export type State = {
	ItemsContainer: ItemsContainer,
	UsersContainer: UsersContainer,
}
