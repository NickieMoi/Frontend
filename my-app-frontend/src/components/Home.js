
import React from 'react'
import hotel from "./hotel1.jpeg"
import hotel2 from "./hotel2.jpeg"


function Home() {
    
    return (
      <div className='bg-page'>
        <div className='intro'>
        <div className='p-home'>
          <img src={hotel2} alt="hotel2" className='hotel2' style={{width: "400px", height: "350px"}}/>
          <p>Welcome to ReelWorld. <br></br>ReelWorld hotel 5 minutes by car from Nairobi CBD. <br></br>it offers free WIFI and parking.</p>
        </div>
        <div>
          <img src={hotel} alt="hotel1" className="hotel1" style={{width: "750px", height: "600px", marginLeft: "3rem"}}/>
        </div>
        </div>
        <div>
          <h2 style={{color: "green", marginTop: "3rem", marginLeft: "2.5rem"}}>Our Services</h2>
        </div>
        <div style={{display: "flex", marginLeft: "2.5rem", marginTop: "1rem"}}>
          <div className='service1'>
            <h4>High Speed Internet Access</h4>
            <p>Stay connected with the world, Wifi <br></br>access in the hotel allows you to browse<br></br> in peace. Whether for your professional <br></br>or personal interests, we are providing <br></br>this service free of charge.</p>
          </div>
          <div className='service2' style={{paddingLeft: "3rem"}}>
            <h4>Laundry</h4>
            <p>Laundry and Ironing: Services that are <br></br>offered every day of the week. Items <br></br>received before 9:00 will be given on the <br></br>same day. If you need ironing emergency, <br></br>we can do it for you quickly between 8:00 <br></br>a.m to 5:00 p.m. Our staff is at your <br></br>disposal for your needs.</p>
          </div>
          <div className='service3' style={{paddingLeft: "3rem"}}>
            <h4>Breakfast</h4>
            <p>Breakfast is available daily from 06: 00 to <br></br>08: 30 am, outside of these hour.</p>
          </div>
          </div>
          <div>
        </div>
          <div className='footer' style={{display: "flex"}}>
            <div style={{marginRight: "10rem", marginLeft: "4rem"}}>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Reviews</p>
            <p>About us</p>
            </div>

            <div>
            <h3>Contact Us</h3>
            <p>Phone: +25414804514</p>
            <p>kipkiruinick97@gmail.com</p>
            </div>
          </div>
          <div>
            <p className='btm-footer' style={{textAlign:"center", fontWeight: "700"}}>Copyright@ReelWorldHotel. All rights reserved.</p>
          </div>
    </div>
    )
  }

export default Home;
