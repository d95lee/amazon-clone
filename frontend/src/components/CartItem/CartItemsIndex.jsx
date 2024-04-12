
import { useDispatch, useSelector } from 'react-redux'
import './CartItemsIndex.css'
// import { selectCartItems } from '../../store/cartItemReducer'
import Layout from '../Layout/Layout'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import NavBanner from '../NavBanner/NavBanner'
import { clearCartItem, fetchCartItems } from '../../store/cartItemReducer'
import { selectCurrentUser } from '../../store/sessionReducer'
import Footer from '../FooterEle'

const CartItemsIndex = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentUser = useSelector(selectCurrentUser)

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

   const handleCheckout = (e) => {
    e.preventDefault()
    if (currentUser) {
        navigate('checkout')
    } else {
        navigate('/signin')
    }
   }

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
                                    <button onClick={() => dispatch(clearCartItem(cart_item.id))} className='cart-item-delete-button'>Delete</button>
                                </div>

                                <div className='cart-left-content-right'>
                                    <p id='cart-price-text'>${(cart_item.productPrice).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='cart-right'>
                    <div className='cart-right-content-top'>
                        <p>Subtotal ({quantity()} items): <span id='cart-total-text'>${total().toFixed(2)}</span></p>
                        <button className='add-to-cart-button' onClick={handleCheckout}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}


export default CartItemsIndex