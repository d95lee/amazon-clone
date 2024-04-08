import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { createCartItem } from "../../store/cartItemReducer"


const AddCartItem = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(createCartItem())
    }, [])
}

export default AddCartItem