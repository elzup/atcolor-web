// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import type { Store } from './types'
// import { persistStore } from 'redux-persist'
import { loadQuestions } from './containers/App/logic'

export default () => {
	const middleware = [thunk]

	const devtool =
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	// HACKME:
	const composer = !!devtool
		? compose(applyMiddleware(...middleware), devtool)
		: compose(applyMiddleware(...middleware))

	const store: Store = createStore(reducer, composer)
	// persistStore(store, () => {
	// 	console.log(store)
	// })
	store.dispatch(loadQuestions())
	return store
}
