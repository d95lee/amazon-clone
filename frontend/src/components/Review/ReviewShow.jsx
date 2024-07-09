import { useDispatch } from "react-redux"
import { useEffect } from 'react'

const ReviewShow = () => {
    const dispatch = useDispatch()

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