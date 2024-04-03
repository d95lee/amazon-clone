export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products 
})

const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
})

