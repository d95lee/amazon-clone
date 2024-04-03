import { useDispatch } from 'react-redux'
import './Product.css'
import { useParams } from 'react-router-dom'

const ProductShow = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()

    return (
        <>
            
        </>
    )
}

export default ProductShow