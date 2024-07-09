import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { fetchProducts } from '../../store/productReducer'
import { useEffect } from 'react'
import ProductIndexItem from './ProductIndexItem'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import Footer from '../Footer/FooterEle'


const ProductsIndex = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.product)
    const productsArr = Object.values(products)
  
    // const products = useSelector(selectProductsArray)
   
   
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <Layout>   
            <div className='products-index-container'>
                <div className='product-container'>
                    {productsArr.map((product, index) => (
                        <div key={index}>
                            <div className='product-display-box'>
                               <Link to={`/products/${index + 1}`}>{product?.photoUrl && <img className='index-photo' src={product.photoUrl} /> }</Link>
                                {/* <p>{product.name}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </Layout>     
    )
}

export default ProductsIndex
