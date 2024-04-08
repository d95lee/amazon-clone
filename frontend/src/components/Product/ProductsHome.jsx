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

    const products = useSelector((state) => state.product)
    const productsArr = Object.values(products)
    
    const randomIndex1 = Math.floor(Math.random() * productsArr.length)
    const randomIndex2 = Math.floor(Math.random() * productsArr.length)
    const randomIndex3 = Math.floor(Math.random() * productsArr.length)
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
                    {Array.from({ length:8 }).map((_, index) => (
                        <div className='box-content' key={index}>    
                            {products[(randomIndex1 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex1 + index) % productsArr.length].photoUrl} /> }
                        </div>
                        ))}
                </div>

                <div className='home-product-box2'>
                    {Array.from({ length:8 }).map((_, index) => (
                        <div className='box-content' key={index}>
                            {products[(randomIndex2 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex2 + index) % productsArr.length].photoUrl} /> }
                        </div>
                    ))}
                </div>

                <div className='home-product-box3'>
                    {Array.from({ length:8 }).map((_, index) => (
                        <div className='box-content' key={index}>
                            {products[(randomIndex3 + index) % productsArr.length]?.photoUrl && <img className='home-photo-single'src={products[(randomIndex3 + index) % productsArr.length].photoUrl} /> }
                        </div>
                    ))}
                </div>
            </div>
        </>     
    )
}

export default ProductsHome


{/* <div className='home-product-box1'>
{Array.from({ length:5 }).map((_, index) => (
    <div className='box-content' key={index}>
        {productsArr.slice(index * 2, (index + 1) * 2).map((product, idx) => (
            <div className='home-photo' key={idx}>
                {product?.photoUrl && <img className='home-photo-single'src={product.photoUrl} /> }
            </div>
        ))}
    </div>
))}
</div> */}