import React, { useState, useEffect } from 'react'
import NewReview from './NewReview';
import Review from './ReviewDelete';

function CustomerReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://hoteli-app-backend.herokuapp.com/reviews")
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

  // const showReview = reviews.map((review) =>(
  //   <ol key={review.id}>
  //    Comment:{review.body}
  //    <button onClick={() => handleDeleteReview(review.id)}>Del Rev</button>
  //   </ol>
  // ))
  
  return (
    <div className='cust-rev'>
      <h3>Our Customer Reviews</h3>
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