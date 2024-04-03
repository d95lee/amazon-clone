import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { useParams } from 'react-router-dom'
import { fetchProduct, selectProduct } from '../../store/productReducer'
import { useEffect } from 'react'

const ProductShow = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const getProduct = useSelector(selectProduct(productId))
    const product = getProduct()
   
    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])

    return (
        <>
            <div>
                <h1>{product && product.name}</h1>
            </div>
        </>
    )
}

export default ProductShow