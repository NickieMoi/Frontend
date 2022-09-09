import React, { useState, useEffect } from 'react'
import NewReview from './NewReview';
import Review from './Review';
function CustomerReview() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/reviews")
    .then((response) => response.json())
    .then((data) =>{
      setReviews(data)
    })
  },[]);
  function handleAddReview(newReview) {
    setReviews([...reviews, newReview]);
  }
  function handleDeleteReview(deletedReview){
    const updatedReviews = reviews.filter((review) => review.id !== deletedReview.id)
    setReviews(updatedReviews)
  }
  return (
    <div className='cust-rev'>
      <ul className="Reviews">
        {reviews.map((review) => (
          <Review id={review.id} key={review.id} review={review}  onDelete={handleDeleteReview} />
        ))}
      </ul>
      <NewReview onAddReview={handleAddReview}/>
    </div>
  )
}
export default CustomerReview;