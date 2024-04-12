import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useEffect } from 'react'
import Layout from '../Layout/Layout'
import AddCartItem from '../CartItem/AddCartItem'
import { createCartItem } from '../../store/cartItemReducer'
// import ReviewShow from '../Review/ReviewShow'
import ReviewsIndex from '../Review/ReviewsIndex'
import { selectCurrentUser } from '../../store/sessionReducer'
import Footer from '../FooterEle'

const ProductShow = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const productId = 2
    const { productId } = useParams()
    const product = useSelector(selectProduct(productId))
    const userId = useSelector(state => state.session?.id)
    const currentUser = useSelector(selectCurrentUser)


    const currentDate = new Date()

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])

    const handleAddToCart = (e) => {
        e.preventDefault()
        if (!currentUser) {
            return navigate('/signin')
        }
            dispatch(createCartItem({ productId, userId, quantity: 1 }));
            navigate('/cart_items')
    }
if (!product) {
    return null
}
    return (
        <Layout>
            <div className='show-wrapper'>
                <div className='show-left'>
                    <div id='show-left-content'>
                        {product?.photoUrl && <img className='show-photo' src={product.photoUrl} /> }
                    </div>
                </div>

                <div className='show-middle'>
                    <div className='show-middle-content'>
                        {product && <p id='product-name'>{product.name}</p>}
                        {/* {product && <p id='product-name'>{product.rating}</p>} */}
                        <hr />
                        {product && <p id='product-price'><span className='price-text'>Price:</span> ${(product.price.toFixed(2))}</p>}
                        {product && <p id='product-description'><span className='description-text'>About this item:</span> 
                        <br/>
                        <br/>
                        {product.description}</p>}
                    </div>
                </div>

                <div className='show-right'>
                    <div id='show-right-content'>
                        <p className='show-right-price'>${(product.price).toFixed(2)}</p>
                        <p>FREE delivery &emsp;&emsp;&emsp;<span id='date'>{currentDate.toLocaleDateString()}</span> 
                        <br />on orders shipped by Amazon over $35</p>
                        <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>   
                    
                        <br />
                        <br />

                        <p className='show-right-text'>Ships: &emsp; from Amazon.com</p>
                        <p className='show-right-text'>Returns: &emsp; Eligible for Return</p>
                        <p className='show-right-text'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Refund or Replacement</p>
                        <p className='show-right-text'>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;within 30 days of receipt</p>
                        <p className='show-right-text'>Payment: &emsp;Secure Transaction</p>
                    </div>
                </div>
            </div>
        <hr id='product-show-divider'/>
            <div className='show-reviews'>
                <div className='show-reviews-left'>
                    <hr />
                    <h3>Review this Product</h3>
                    <p>Share your thoughts with other customers</p>
                    <Link to={currentUser ? `/products/${productId}/create_review` : '/signin'}><button className='create-review-button'>Write a customer review</button></Link>
                    <hr />
                </div>
                <div className='show-bottom'>
                    <div id='show-bottom-right-content'>
                        <h3>Top reviews from the United States</h3>
                        <ReviewsIndex/>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default ProductShow