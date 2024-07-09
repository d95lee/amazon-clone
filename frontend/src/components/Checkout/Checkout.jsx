import { useDispatch, useSelector } from 'react-redux'
import Layout from '../Layout/Layout'
import './Checkout.css'
import { useEffect } from 'react'
import { fetchCartItems } from '../../store/cartItemReducer'
import check from '../../assets/icons/check.png'
import linkedin from '../../assets/icons/linkedin.png'
import github from '../../assets/icons/github.png'
import truck from '../../assets/gifs/shipping.gif'
import Footer from '../Footer/FooterEle'

const Checkout = () => {
    const dispatch = useDispatch()
    

    const cart_items = useSelector((state) => state.cart_item)
    const cart_itemsArr = Object.values(cart_items)

    useEffect(() => {
        dispatch(fetchCartItems())
    }, [])

    return (
        
        <Layout>
            <div className='checkout-container'>
            <div className='order-text-container'>
            <img src={check} className='check-mark' alt='check-mark'></img>
            <span className='checkout-confirmation-text'>Your order is confirmed!</span>
            </div>
                <div className='checkout-content'>
                
                    {/* {cart_itemsArr.map((cart_item, index) => (
                            <div key={index}>           
                                {cart_item?.photoUrl && <img className='checkout-photo' src={cart_item.photoUrl} /> }                                                      
                            </div>
                        ))} */}
               
                </div>
                <div className='gif-container'>
                        <img src={truck} alt="" className='truck-gif'/>
                </div>
                <em id='socials-text'>Your package will arrive in 2 business days</em>
                <div className='socials-container'>
                    <a href="https://github.com/d95lee/amazon-clone" target="_blank"><img src={github} className='github-icon'/></a>
                    <a href="https://www.linkedin.com/in/david-lee-49959a20a/" target="_blank"><img src={linkedin} className='linkedin-icon'/></a>
                </div>
            </div>
            <Footer/>
        </Layout>
        
    )
}

export default Checkout