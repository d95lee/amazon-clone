import { useDispatch, useSelector } from "react-redux"
import Layout from "../Layout/Layout"
import { useEffect, useState } from "react"
import './EditReview.css'
import { changeReview, createReview } from "../../store/reviewReducer"
import { selectProduct } from "../../store/productReducer"
import { Link, useNavigate, useParams } from "react-router-dom"



const EditReview = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formHeadline, setFormHeadline] = useState('')
    const [formBody, setFormBody] = useState('')
    const userId = useSelector(state => state.session.id)
    const userEmail = useSelector(state => state.session.email)
    const { productId } = useParams()
    const { reviewId } = useParams()
    const product = useSelector(selectProduct(productId))
    
    const reviews = useSelector((state) => state.review)
    console.log(reviews)
    const reviewsArr = Object.values(reviews)
    console.log(reviewsArr)

    useEffect(() => {
        reviewsArr.map((review) => {
            if (setFormBody(review.body) === review.body) {
                return setFormBody(review.body)
            }
        })
    }, [])

    // useEffect(() => {
    //     const review = reviewsArr.find((review) => review.id === reviewsArr.id)
    //     console.log(review)
    //     if (review) {
    //         setFormBody(review.body)
    //     }
    // }, [productId])

    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
    
    const handleOnEditClick = (e) => {
        e.preventDefault()
        const review = reviewsArr.find(review => review.id === reviewId);
        dispatch(changeReview({
            id: reviewId,
            userId, 
            body: formBody,
            productId: productId, // need to get this 
            rating: '2 stars',
            username: userEmail,
            owner: userEmail
        
        }))
            setFormBody('')
            navigate(`/products/${productId}`)
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
                <Link to={`/products/${productId}`}><button className='add-to-cart-button' onClick={handleOnEditClick}>Submit Edit</button></Link>
            </form>
            
            </div>
        </Layout>
    )
}

export default EditReview