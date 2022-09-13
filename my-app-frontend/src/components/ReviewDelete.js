import React from 'react'
function ReviewDelete({review, onDelete}) {
    
  function handleDeleteClick() {
    fetch(`https://hoteli-app-backend.herokuapp.com/reviews/${review.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDelete(review));
  }
  return (
 <div className='rev'>
      <div>
      <span className='body'>{review.body}</span>
      </div>
      <div>
      <button onClick={handleDeleteClick} className="del">Delete</button>
    </div>
    </div>
  )
}

export default ReviewDelete