// @flow
export const RECEIVE_ITEM: 'ItemsContainer/RECEIVE_ITEM' =
	'ItemsContainer/RECEIVE_ITEM'
export const DELETE_ITEM: 'ItemsContainer/DELETE_ITEM' =
	'ItemsContainer/DELETE_ITEM'

export const Actions = {
	RECEIVE_ITEM,
	DELETE_ITEM,
}

export type ReceiveItem = {
	type: typeof RECEIVE_ITEM,
	name: string,
}
export type DeleteItem = {
	type: typeof DELETE_ITEM,
	id: number,
}

export type Action = ReceiveItem | DeleteItem
