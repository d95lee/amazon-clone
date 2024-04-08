import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import productReducer from './productReducer'
import cartItemReducer from './cartItemReducer'

const rootReducer = combineReducers({
    session: sessionReducer,
    product: productReducer,
    // products: productReducer,
    cart_item: cartItemReducer
})

const configureStore = (initialState = {}) => (
    createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
)

export default configureStore