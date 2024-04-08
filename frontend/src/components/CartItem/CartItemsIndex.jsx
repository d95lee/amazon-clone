
import { useDispatch, useSelector } from 'react-redux'
import './CartItemsIndex.css'
// import { selectCartItems } from '../../store/cartItemReducer'
import Layout from '../Layout/Layout'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const CartItemsIndex = () => {
    const dispatch = useDispatch()
    // const product = useSelector(selectCartItem())

    const cart_items = useSelector((state) => state.cart_item)
    const cart_itemsArr = Object.values(cart_items)
    
    // const getProduct = (productId) => useSelector(selectProduct(productId))

    // useEffect(() => {
    //     cart_itemsArr.forEach((cart_item) => {
    //         dispatch(getProduct(cart_item.product_id))
    //     })
    // }, [cart_itemsArr, getProduct])

    useEffect(() => {
        cart_itemsArr.forEach((cart_item) => {
            dispatch(fetchProduct(cart_item.product_id))
            console.log(dispatch(fetchProduct(cart_item.product_id)))
        })
    }, [dispatch, cart_itemsArr, fetchProduct])

    return (
        <>
           <Layout>
                {cart_itemsArr.map((cart_item, index) => (
                    <div key={index}>
                        <p className='cart-item'>productid: {cart_item.product_id}</p>
                        {cart_item.product_id && (
                        <div>
                            <p className='test '>name: {fetchProduct(cart_item.product_id)?.data?.product?.name}</p>
                            <p>price: {fetchProduct(2).data?.product.price}</p>
                        </div>
                    )}
                    </div>
                ))}
           </Layout>
        </>
    )
}


export default CartItemsIndex