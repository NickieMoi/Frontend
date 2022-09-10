import React, { useState, useEffect } from 'react'
import hotel from "./hotel1.jpeg"
import hotel2 from "./hotel2.jpeg"
function Home() {
    const [hotels, setHotels] = useState([]);
    return (
        <div className='bg-page'>
          <div className='intro'>
          <div className='p-home'>
            <img src={hotel2} alt="hotel2" className='hotel2' style={{width: "400px", height: "350px"}}/>
            <p>Welcome to ReelWorld. <br></br>ReelWorld hotel 5 minutes by car from Nairobi CBD. <br></br>it offers free WIFI and parking.</p>
          </div>
          <div>
          <img src={hotel} alt="hotel1" className="hotel1" style={{width: "850px", height: "600px", marginLeft: "3rem"}}/>
            <img src={hotel} alt="hotel1" className="hotel1" style={{width: "850px", height: "600px", marginLeft: "3rem"}}/>
          </div>
          </div>
            <header>
              { hotels.map((hotel) => (
                  <ol id={hotel.id} key={hotel.id} >
                  <p>Name: {hotel.name}</p>
                  <p>Location:{hotel.location}</p>
                  <p>Price: {hotel.price}</p>
                  </ol>
              ))}
            </header>
        </div>
      )
    }
  export default Home;