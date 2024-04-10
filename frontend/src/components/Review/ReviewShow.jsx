import { useParams } from 'react-router-dom'
import { selectReview } from '../../store/reviewReducer'
import './ReviewShow.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'

const ReviewShow = () => {
    const dispatch = useDispatch()
    
    // const reviewItems = useSelector((state) => state.review_item)
    // const reviewItemsArr = Object.values(reviewItems)

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])

    return (
        <>
            {/* {reviewItemsArr.map((reviewItem, index) => {
                {reviewItem && <p>{reviewItems}</p>}
            })} */}
        </>
    )
}

export default ReviewShow