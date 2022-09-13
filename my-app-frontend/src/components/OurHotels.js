import React, { useState, useEffect } from 'react'
function OurHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://hoteli-app-backend.herokuapp.com/hotels")
    .then((response) => response.json())
    .then((data) =>{
      setHotels(data)
    })
  },[]);
  return (
    <div className='cust-rev'>
      <h3>Our Hotels</h3>
      <ul className="hotels">
       
      {
            hotels.map((hotel) => ( 
            <ol key = { hotel.id } >
              <div>
                 { hotel.name }
                 </div>
                  <div>    
                 {hotel.location}
                 </div>
  
                </ol>
            ))
        }
      </ul>
     
    </div>
  )
}

export default OurHotels;