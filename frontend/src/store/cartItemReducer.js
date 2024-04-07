import { postCartItem, editCartItem, deleteCartItem } from '../utils/cartItemApiUtils'


//TYPES
export const RECEIVE_CARTITEMS = 'cart_items/RECEIVE_CARTITEMS'
export const RECEIVE_CARTITEM = 'cart_items/RECEIVE_CARTITEM'
export const CREATE_CARTITEM = 'cart_item/CREATE_CARTITEM'
export const UPDATE_CARTITEM = 'cart_item/UPDATE_CARTITEM'
export const DESTROY_CARTITEM = 'cart_item/DESTROY_CARTITEM'


//ACTION CREATORS
export const receiveCartItems = cart_items => ({
    type: RECEIVE_CARTITEMS,
    cart_items
})

export const receiveCartItem = cart_item => ({
    type: RECEIVE_CARTITEM,
    cart_item 
})

export const newCartItem = cart_item => ({
    type: CREATE_CARTITEM,
    cart_item
})

export const updateCartItem = cart_item => ({
    type: UPDATE_CARTITEM,
    cart_item
})

export const removeCartItem = cart_itemId => ({
    type: DESTROY_CARTITEM,
    cart_itemId
})

//THUNK ACTION CREATORS 

export const fetchCartItems = () => (dispatch, getState) => {
    fetch('api/cart_items')
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(receiveCartItems(data))
    })
    .catch(error => {
        console.log('Error fetching cart_items:', error)
    })
}

export const fetchCartItem = (cart_itemId) => (dispatch, getState) => {
    console.log(cart_itemId)
    fetch(`api/cart_items/${cart_itemId}`)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(receiveCartItem(data)) 
    })
    .catch(error => {
        console.log('Failed to fetch cart_item:', error)
    })
}

export const createCartItem = cart_item => (dispatch, getState) => {
    postCartItem(cart_item)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })  
    .then(data => {
        dispatch(newCartItem(data)) 
    })
    .catch(error => {
        console.log('Failed to create cart:', error)
    })
}

export const changeCartItem = cart_item => (dispatch, getState) => {
    editCartItem(cart_item)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            throw res
        }
    })
    .then(data => {
        dispatch(updateCartItem(data))
    })
    .catch(error => {
        console.log('Failed to update cartitem:', error)
    })
}

export const clearCartItem = cart_itemId => (dispatch, getState) => {
    deleteCartItem(cart_itemId) 
        .then(res => {
        if (!res.ok) {
            throw res
        }
        dispatch(removeCartItem(cart_itemId))
    })
    .catch(error => {
        console.log('Failed to delete cart item:', error)
    })
}

export const selectCartItem = (cart_itemId) => state => state.cart_item[cart_itemId]

// export const selectCartItems = (state) => Object.values(state.cart_item)


const cartItemReducer = (state = {}, action) => {
    const nextState = { ...state }
        switch (action.type) {
            case RECEIVE_CARTITEM:
                nextState[action.cart_item.id] = action.cart_item
                return nextState
            case RECEIVE_CARTITEMS:
                return action.cart_items
            case CREATE_CARTITEM:
                nextState[action.cart_item.id] = action.cart_item
                return nextState
            case UPDATE_CARTITEM: 
                nextState[action.cart_item.id] = action.cart_item
                return nextState
            case DESTROY_CARTITEM: 
                delete nextState[action.cart_item.id]
                return nextState
            default:
                return state
        }
}

export default cartItemReducer