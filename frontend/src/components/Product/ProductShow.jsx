import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import AddCartItem from '../CartItem/AddCartItem'
import { createCartItem } from '../../store/cartItemReducer'
import ReviewsIndex from '../Review/ReviewsIndex'
import { selectCurrentUser } from '../../store/sessionReducer'
import Footer from '../FooterEle'
import blue_logo from '../../assets/logo/amazon-blue.png'
import { FaStar } from 'react-icons/fa6'
import { fetchReviews } from '../../store/reviewReducer'

const ProductShow = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [rating, setRating] = useState(null)
    const [averageStars, setAverageStars] = useState(0)

    const { productId } = useParams()
    const product = useSelector(selectProduct(productId))
    const userId = useSelector(state => state.session?.id)
    const currentUser = useSelector(selectCurrentUser)

    

    const reviews = useSelector((state) => state.review)
    const reviewsArr = Object.values(reviews)

    const currentProductArr = reviewsArr.filter(review => String(review.productId) === productId)
    console.log(currentProductArr)

    const productsRatingsArr = () => {
        let avgRatingsCount = 0
        currentProductArr.map((review) => {
            avgRatingsCount += review.rating
        })
        
        setAverageStars(avgRatingsCount / currentProductArr.length)
        console.log(avgRatingsCount / currentProductArr.length)
    }


    // const selectCurrentProducts = useSelector(state => state.review.productId === productId)
    // console.log(selectCurrentProducts)

    const currentDate = new Date()

    useEffect(() => {
        productsRatingsArr()
    }, [reviews])

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
                        <div className='show-product-rating'>
                            <p className='show-product-rating-text'>
                                {parseFloat(averageStars.toFixed(1))}
                            </p>
                                {[...Array(5)].map((star, index) => {     
                                    const currentStars = index + 1
                                    return (
                                <label key={index}>
                                    
                                    <FaStar 
                                        className='review-stars' 
                                        size={20}
                                        key={index}
                                        color={currentStars <= (averageStars) ? "#ffc107" : "e4e5e9"}
                                    />
                                </label>
                                    )
                                })}
                                <p className='show-product-review-total-text'>{currentProductArr.length} ratings</p>
                        </div>
                                <p>{product.category}</p>
                        
                        <hr />
                        {product && <p id='product-price'><span className='price-text'>Price:</span> ${product.price}</p>}
                        {product && <p id='product-description'><span className='description-text'>About this item:</span> 
                        <br/>
                        <br/>
                        {product.description}</p>}
                    </div>
                </div>

                <div className='show-right'>
                    <div className='show-right-content'>
                        <Link to={'/'}><img className='show-right-logo' src={blue_logo}/></Link>
                        <p>Enjoy fast, free delivery, exclusive deals, and award-winning 
                            movies & TV shows with Prime
                        </p>
                        
                        <p className='show-right-price-text'>Buy new:</p>
                        <p className='show-right-price'>${product.price}</p>
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