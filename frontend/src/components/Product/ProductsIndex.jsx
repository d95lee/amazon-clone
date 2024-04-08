import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { fetchProducts } from '../../store/productReducer'
import { useEffect } from 'react'
import ProductIndexItem from './ProductIndexItem'
import Layout from '../Layout/Layout'
// import ProductShow from './ProductShow'

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
            <div className='product-container'>
                {productsArr.map((product, index) => (
                    <div key={index}>
                        <div className='product-display-box'>
                            {product?.photoUrl && <img className='index-photo' src={product.photoUrl} /> }
                            <p>ID: {product.id}</p>
                            <p>Name: {product.name}</p>
                            <p>Price: {product.price}</p>
                            <p>Description: {product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>     
    )
}

export default ProductsIndex
