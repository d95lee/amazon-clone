import './ProductsHome.css'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { fetchProducts } from '../../store/productReducer'
import { useEffect } from 'react'
import ProductIndexItem from './ProductIndexItem'
import Layout from '../Layout/Layout'
// import ProductShow from './ProductShow'

const ProductsHome = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)
    const productsArr = Object.values(products)
  
    // const products = useSelector(selectProductsArray)
   
   
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>   
            <div className='home-product-container'>
                <div className='home-product-box0'>
                </div>
                
                <div className='home-product-box1'>
                    {Array.from({ length:5 }).map((_, index) => (
                        <div className='box-content' key={index}>
                            {productsArr.slice(index * 2, (index + 1) * 2).map((product, idx) => (
                                <div className='home-photo' key={idx}>
                                    {product?.photoUrl && <img className='home-photo-single'src={product.photoUrl} /> }
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className='home-product-box2'>
                    {Array.from({ length:5 }).map((_, index) => (
                        
                        <div className='box-content' key={index}>
                            
                        </div>
                    ))}
                </div>

                <div className='home-product-box3'>
                    {Array.from({ length:5 }).map((_, index) => (
                        <div className='box-content' key={index}>
                            
                        </div>
                    ))}
                </div>
            </div>










            {/* {productsArr.map((product, index) => (
                <div key={index}>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))} */}


        </>     
    )
}

export default ProductsHome