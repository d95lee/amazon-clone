
import { useDispatch, useSelector } from 'react-redux'
import './CartItemsIndex.css'
// import { selectCartItems } from '../../store/cartItemReducer'
import Layout from '../Layout/Layout'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import NavBanner from '../NavBanner/NavBanner'
import { clearCartItem } from '../../store/cartItemReducer'

const CartItemsIndex = () => {
    const dispatch = useDispatch()
    // const product = useSelector(selectCartItem())

    const cart_items = useSelector((state) => state.cart_item)
    const cart_itemsArr = Object.values(cart_items)
    

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])

    const quantity = () => {
        const totalQuantity = cart_itemsArr.reduce((total, cart_item) => total + cart_item.quantity, 0)
        return totalQuantity
    }

    const total = () => {
        const totalPrice = cart_itemsArr.reduce((total, cart_item) => total + cart_item.productPrice, 0)
        return totalPrice
    }

    // const handleDeleteClick = (productId) => {
    //     dispatch(clearCartItem(productId))
    // }

    return (
        <Layout>
            <NavBanner/>

            <div className='cart-container'>
                <div className='cart-left'>
                    
                    <div className='cart-shopping-text-container'>
                        <p id='cart-shopping-text-shopping'>Shopping Cart</p>
                        <p id='cart-shopping-text-price'>Price</p>
                    </div>

                    {cart_itemsArr.map((cart_item, index) => (
                        <div key={index}> 
                            <hr id='cart-divider'/>

                            <div className='cart-left-content-container'>
                                <div className='cart-left-content-left'>
                                    {cart_item?.photoUrl && <img className='cart-photo' src={cart_item.photoUrl} /> }
                                </div>

                                <div className='cart-left-content-mid'>
                                    <p id='cart-name-text'>{cart_item.productName}</p>
                                    <button onClick={() => dispatch(clearCartItem(cart_item.id))}>Delete</button>
                                    {/* <button onClick={handleDeleteClick()}>Delete</button> */}
                                </div>

                                <div className='cart-left-content-right'>
                                    <p id='cart-price-text'>${cart_item.productPrice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='cart-right'>
                    <div className='cart-right-content-top'>
                        <p>Subtotal ({quantity()} items): <span id='cart-total-text'>${total()}</span></p>
                        <button className='add-to-cart-button'>Proceed to checkout</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default CartItemsIndex