import { thunk } from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import productReducer from './productReducer'
import cartItemReducer from './cartItemReducer'
import reviewReducer from './reviewReducer'

const rootReducer = combineReducers({
    session: sessionReducer,
    product: productReducer,
    cart_item: cartItemReducer,
    review: reviewReducer
})

const configureStore = (initialState = {}) => (
    createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
)

export default configureStore