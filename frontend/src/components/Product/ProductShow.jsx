import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useEffect } from 'react'
import Layout from '../Layout/Layout'
import AddCartItem from '../CartItem/AddCartItem'
import { createCartItem } from '../../store/cartItemReducer'


const ProductShow = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const productId = 2
    const { productId } = useParams()
    const product = useSelector(selectProduct(productId))
    
    const currentDate = new Date()

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])


    const handleAddToCart = (e) => {
        e.preventDefault()
        dispatch(createCartItem())
        navigate('/cart_items')
    }

    return (
        <Layout>
            {/* <div className='product-show'>
                {product && <p id='product-name'>{product.name}</p>}
                {product && <p id='product-name'>{product.price}</p>} */}
                {/* <Link to={`products/${productId}`}>

                    {product && <p id='product-name'>{product.price}</p>}
                </Link> */}
            {/* </div> */}

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
                        {product && <p id='product-price'><span className='price-text'>Price:</span> ${product.price}</p>}
                        {product && <p id='product-description'><span className='description-text'>About this item:</span> 
                        <br/>
                        <br/>
                        {product.description}</p>}
                    </div>
                </div>

                <div className='show-right'>
                    <div id='show-right-content'>
                        <p>FREE delivery {currentDate.toLocaleDateString()} on orders shipped by Amazon over $35</p>
                        <button className='add-to-cart-button' onClick={handleAddToCart}>Add to Cart</button>   
                    </div>
                </div>
            </div>

            <div className='show-reviews'>
                <div className='show-bottom'>
                    <div id='show-bottom-content'>
                        <p>Reviews Placeholder</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductShow