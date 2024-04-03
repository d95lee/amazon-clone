import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import productReducer from './productReducer'

const rootReducer = combineReducers({
    session: sessionReducer,
    product: productReducer
})

const configureStore = (initialState = {}) => (
    createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
)

export default configureStore