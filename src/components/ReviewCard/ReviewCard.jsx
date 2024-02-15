// components


import './ReviewCard.css'

const ReviewCard = ({ review }) => {
  console.log(review)
  return (
    <span className='Review-Card'>
      {review.review}
    </span>
  )
}

export default ReviewCard