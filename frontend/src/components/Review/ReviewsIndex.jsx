import { Link, useParams } from 'react-router-dom'
import { selectReview } from '../../store/reviewReducer'
import './ReviewsIndex.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import profile from '../../assets/icons/profile.jpeg'
import ReviewStars from './ReviewStars'
import { selectCurrentUser } from '../../store/sessionReducer'

const ReviewsIndex = () => {
    const dispatch = useDispatch()
    const { productId } = useParams()
    const currentUser = useSelector(selectCurrentUser)

    const reviews = useSelector((state) => state.review)
    const reviewsArr = Object.values(reviews)

    const productArr = reviewsArr.filter(review => String(review.productId) === productId)
   

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])
    
    // review.productId === productId ? review.productId : ''

    // const handleDelete = (e) => {
    //     e.preventDefault()
    //     dispatch(clearReview(productId))
    // }
// if ownerId === review.ownerId then dispatch(clearReview(review.owner))
    return (
        <>
            <div className='product-reviews'>
                {productArr.map((review, index) => (
                    <div key={index}>
                        
                        {<p id='review-owner-text'><img className='profile-pic' src={profile}/><span id='owner-text-positioning'>{review.owner}</span></p>}
            
                        <p className='verified-purchase-text'>Verified Purchase</p>
                        <ReviewStars initialRating={review.rating}/>
                        {<p id='review-body-text'>{review.body}</p>}
                        {(currentUser?.id === review.userId) ? <Link to={`edit_review/${review.id}`}><button className='edit-button'>Edit</button></Link> : ''}
                        {(currentUser?.id === review.userId) ? <button onClick={() => dispatch(clearReview(review.id))} className='delete-button'>Delete</button> : ''}
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ReviewsIndex