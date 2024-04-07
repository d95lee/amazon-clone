import { useDispatch, useSelector } from 'react-redux'
import './CartItemsIndex.css'
// import { selectCartItems } from '../../store/cartItemReducer'
import Layout from '../Layout/Layout'

const CartItemsIndex = () => {
    const dispatch = useDispatch()
    // const cart_items = useSelector(selectCartItems())

    const cart_items = useSelector((state) => state.cart_item)
    const cart_itemsArr = Object.values(cart_items)

    return (
        <>
           <Layout>
                {cart_itemsArr.map((cart_item, index) => (
                    <div key={index}>
                        <p className='cart-item'>Quantity: {cart_item.quantity}</p>
                        
                    </div>
                ))}
           </Layout>
        </>
    )
}


export default CartItemsIndex