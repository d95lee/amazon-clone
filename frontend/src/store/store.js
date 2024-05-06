import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import sessionReducer from './sessionReducer'
import productReducer from './productReducer'
import cartItemReducer from './cartItemReducer'
import reviewReducer from './reviewReducer'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    session: sessionReducer,
    product: productReducer,
    cart_item: cartItemReducer,
    review: reviewReducer
})

// const temp = [thunk];

// if (import.meta.env.DEV) {
//     const logger = require('thunk-logger');
//     temp.push(logger);
// }


// Below is for prod

const middleware = applyMiddleware(thunk);

const configureStore = (initialState = {}) => (
    createStore(rootReducer, initialState, middleware)
)

// Bottom is for dev mode

// const temp = [thunk];
// const middleware = applyMiddleware(...temp, logger);

// const configureStore = (initialState = {}) => (
//     createStore(rootReducer, initialState, middleware)
// )

export default configureStore