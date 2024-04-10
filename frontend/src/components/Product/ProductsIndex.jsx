import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { fetchProducts } from '../../store/productReducer'
import { useEffect } from 'react'
import ProductIndexItem from './ProductIndexItem'
import Layout from '../Layout/Layout'
// import ProductShow from './ProductShow'

const ProductsIndex = () => {
    const dispatch = useDispatch()

    const products = useSelector((state) => state.products)
    const productsArr = Object.values(products)
  
    // const products = useSelector(selectProductsArray)
   
   
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <Layout>   
            {productsArr.map((product, index) => (
                <div key={index}>
                    <p>ID: {product.id}</p>
                    <p>Name: {product.name}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            ))}

            {/* <p>{products}</p> */}
            {/* <ul>
                {productsArr.map((product, idx) => (
                     
                <ProductIndexItem key={idx} product={product.name} />
            
                ))}
            </ul>
            <p>TESTING</p> */}
        </Layout>     
    )
}

export default ProductsIndex
