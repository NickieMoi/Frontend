import React from "react";
import { NavLink } from "react-router-dom"
const navLinks = {
    display: "inline",
    textDecoration: "none",
    fontSize: "18px",
    marginLeft: "15rem"
}
function NavBar(){
    return (
        <div className="nav">
            <div>
                <h3 style={{fontSize: "23px", marginLeft: "2rem"}}>MyHotel</h3>
            </div>
            <div>
                <NavLink to="/" style={navLinks}>
                    Home
                </NavLink>
                <NavLink to="customerReviews" style={navLinks}>
                    Reviews
                </NavLink>
                <NavLink to="OurHotels"style ={navLinks}>
                    Our_Hotels
                </NavLink>
                <NavLink to="About" style={navLinks}>
                    About
                </NavLink>
            </div>
        </div>
    )
}
export default NavBar;