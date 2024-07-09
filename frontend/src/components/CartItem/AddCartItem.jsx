import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { createCartItem } from "../../store/cartItemReducer"


const AddCartItem = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(createCartItem())
    }, [])
}

export default AddCartItem