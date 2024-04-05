import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { Link, useParams } from 'react-router-dom'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useEffect } from 'react'
import Layout from '../Layout/Layout'

const ProductShow = () => {
    const dispatch = useDispatch()
    // const productId = 2
    const { productId } = useParams()
    const product = useSelector(selectProduct(productId))
    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [])

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
                        <p>Photo Placeholder</p>
                    </div>
                </div>

                <div className='show-middle'>
                    <div className='show-middle-content'>
                        {product && <p id='product-name'>{product.name}</p>}
                        {/* {product && <p id='product-name'>{product.rating}</p>} */}
                        <hr />
                        {product && <p id='product-price'>{product.price}</p>}
                        {product && <p id='product-description'>{product.description}</p>}
                    </div>
                </div>

                <div className='show-right'>
                    <div id='show-right-content'>
                        <p>Cart Placeholder</p>   
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