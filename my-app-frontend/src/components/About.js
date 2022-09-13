import React from 'react'
// import About from './hotel.jpeg'

function Master() {
  return (
    <div style={{marginBottom: "4rem"}}>
    <h2 style={{marginLeft: "8rem", color: "green"}}>About us</h2>
    <div style={{display: "flex"}}>
      
      <div>
        <p style={{letterSpacing: "2px", lineHeight: "25px", marginLeft: "2rem"}}>
          ReelWorld Hotel is a 5-minute drive from Lang'ata Airport. <br></br> It offers free Wi-Fi and parking. This small hotel has lush <br></br> garden and a 24-hour front desk.
        <p>Individually decorated, the accommodations have a private <br></br>entrance and a terrace or balcony with garden views. They are <br></br> equipped with air conditioning, a small sitting area and a <br></br> private bathroom with shower. They also include a desk and a <br></br>safe.</p>
         ReelWorld Hotel has a bar-restaurant and packed lunches <br></br>are available upon request. The hotel’s staff <br></br>can help arrange car rentals, airport shuttles and excursions.
        </p>
      </div>
      <div>
        {/* <img src={About} style={{width: "450px", height: "510px", marginLeft: "7rem", borderRadius: "4px"}} alt='about' /> */}
      </div>
      <div>
      </div>
      </div>
    </div>
  )
}

export default Master