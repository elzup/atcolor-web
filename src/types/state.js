// @flow
import type { State as ItemsContainer } from '../containers/ItemsContainer/reducer'
import type { State as UserById } from '../containers/UserById/reducer'
import type { State as UsersContainer } from '../containers/UsersContainer/reducer'

export type State = {
	ItemsContainer: ItemsContainer,
	UserById: UserById,
	UsersContainer: UsersContainer,
}
