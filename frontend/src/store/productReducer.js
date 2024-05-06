import { CREATE_CARTITEM, RECEIVE_CARTITEM, RECEIVE_CARTITEMS } from "./cartItemReducer"


export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products 
})

export const receiveProduct = data => ({
    type: RECEIVE_PRODUCT,
    data
})




export const selectProduct = (productId) => state => state.product[productId]
// export const selectProducts = state => Object.values(state.product)
export const selectProductsArray = state => Object.values(state.product)


export const fetchProducts = () => async dispatch => {
    const res = await fetch(`/api/products`)

    if (res.ok) {
        const data = await res.json()
        dispatch(receiveProducts(data))
    }
}

export const fetchProduct = (productId) => async dispatch => {
    const res = await fetch(`/api/products/${productId}`)
    

    if (res.ok) {
        const data = await res.json()
        dispatch(receiveProduct(data))
    }
}


const productReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_PRODUCT:
            nextState[action.data.product.id] = action.data.product
            return nextState
        case RECEIVE_PRODUCTS:
            return action.products

        case RECEIVE_CARTITEMS:
            return action.data.products 
            // return action.data.products !== undefined ? action.data.cartItems : null;
      
        case RECEIVE_CARTITEM:
            nextState[action.data.cartItem.id] = action.data.cartItem
            return nextState
        default:   
            return state;
    }
}

export default productReducer