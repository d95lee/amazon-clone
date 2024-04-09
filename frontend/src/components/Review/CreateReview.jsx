import { useDispatch, useSelector } from "react-redux"
import Layout from "../Layout/Layout"
import { useState } from "react"
import './CreateReview.css'
import { createReview } from "../../store/reviewReducer"
import { selectProduct } from "../../store/productReducer"
import { useParams } from "react-router-dom"

const CreateReview = () => {
    const dispatch = useDispatch()
    const [formHeadline, setFormHeadline] = useState('')
    const [formBody, setFormBody] = useState('')
    const userId = useSelector(state => state.session.id)
    const userEmail = useSelector(state => state.session.email)
    const { productId } = useParams()
    const product = useSelector(selectProduct(productId))
    

    const handleOnSubmit = (e) => {
        e.preventDefault()

    }
    
    const handleOnClick = (e) => {
        e.preventDefault()
        dispatch(createReview({ 
            userId,
            body: formBody,
            productId: productId, // need to get this 
            rating: 2,
            username: userEmail,
            owner: userEmail
        }))
        setFormHeadline('')
        setFormBody('')
    }


    return (
        <Layout>
            <div className="review-container">
            <form onSubmit={handleOnSubmit}>
                <label>Add a headline
                    <input type="text" 
                    value={formHeadline}
                    onChange={(e) => setFormHeadline(e.target.value)}
                    />
                </label>
            <br />
            <hr />
                <label>Add a written review
                    <textarea type="text" 
                    value={formBody}
                    onChange={(e) => setFormBody(e.target.value)}                    
                    />
                </label>

                <hr />
                <button className='add-to-cart-button' onClick={handleOnClick}>Submit</button>
            </form>
            
            </div>
        </Layout>
    )
}

export default CreateReview