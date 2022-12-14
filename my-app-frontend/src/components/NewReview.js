import React, { useState } from 'react'

function NewReview({onAddReview}) {
    const [formData, setFormData] = useState({
        body: ""
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("https://hoteli-app-backend.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({body:formData.body})
    })
           .then(response => response.json())
           .then((data) => {
           onAddReview(data)
           setFormData({...formData,body:""})
    })
}  
  return (
    <div>
        <p style={{marginLeft:"50px"}}>Add Your Review</p>
        <form className='review-form' onSubmit={handleSubmit}>
            <input className="input" type="text" name="body" placeholder='Add Your Comment...' value={formData.body} onChange={handleChange} />
            <button type="submit" className='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewReview;