import { useEffect, useState } from "react"
import { FaStar } from 'react-icons/fa6'

const ReviewStars = ({ initialRating }) => {
    const [rating, setRating] = useState(initialRating)
    const [mouseHover, setMouseHover] = useState(null)

    useEffect(() => {
        setRating(initialRating)
    }, [initialRating])

    return ( 
        <div>
            {[...Array(5)].map((star, index) => {     
                const currentStars = index + 1
                return (
            <label key={index}>
                <input type="radio"
                    name='rating'
                    value={currentStars}
                    onClick={() => setRating(currentStars)}
                    />
                <FaStar className='review-stars-showpage' size={20}
                        color={currentStars <= (mouseHover || rating) ? "#ffc107" : "e4e5e9"}
                        onMouseEnter={() => setMouseHover}
                        onMouseLeave={() => setMouseHover(null)}
                        />
            </label>
                )
            
            })}
        </div>
    )

}
    

export default ReviewStars