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

//(userId, cart_item)
export const createCartItem = (cart_item) => (dispatch, getState) => {
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
        console.log('Failed to create cart item:', error)
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
            console.log('RECEIVE_CARTITEM Action:', action);
            nextState[action.cart_item.id] = action.cart_item;
            console.log('Next State after RECEIVE_CARTITEM:', nextState);
            return nextState;
        case RECEIVE_CARTITEMS:
            console.log('RECEIVE_CARTITEMS Action:', action);
            console.log('Next State after RECEIVE_CARTITEMS:', action.cart_items);
            return action.cart_items;
        case CREATE_CARTITEM:
            console.log('CREATE_CARTITEM Action:', action);
            nextState[action.cart_item.id] = action.cart_item;
            console.log('Next State after CREATE_CARTITEM:', nextState);
            return nextState;
        case UPDATE_CARTITEM: 
            console.log('UPDATE_CARTITEM Action:', action);
            nextState[action.cart_item.id] = action.cart_item;
            console.log('Next State after UPDATE_CARTITEM:', nextState);
            return nextState;
        case DESTROY_CARTITEM: 
            console.log('DESTROY_CARTITEM Action:', action);
            delete nextState[action.cart_item.id];
            console.log('Next State after DESTROY_CARTITEM:', nextState);
            return nextState;
        default:
            console.log('Unknown Action:', action);
            return state;
        }
}

export default cartItemReducer