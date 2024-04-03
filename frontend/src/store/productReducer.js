

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products 
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})




export const selectProduct = productId => state => state.products[productId]



export const fetchProducts = () => async dispatch => {
    const res = await fetch(`/products`)

    if (res.ok) {
        dispatch(receiveProducts(await res.json()))
    }
}

export const fetchProduct = (product) => async dispatch => {
    const res = await fetch(`/products/${product.id}`)

    if (res.ok) {
        dispatch(receiveProduct(await res.json()))
    }
}


const productReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product
            return nextState
        case RECEIVE_PRODUCTS:
            return action.products
        default:   
            return state;
    }
}

export default productReducer