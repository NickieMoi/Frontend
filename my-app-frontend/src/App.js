import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CustomerReview from "./components/CustomerReview"; 
// import Review from "./components/ReviewDelete";
// import NewReview from "./components/NewReview";

function App() {
  return (
    <div className="App">
      {/* <Router />
      <NavBar />
      <Routes>
        <Route exact path="./" element={<NavBar />}></Route>

        <Route exact path="contactUs" element={<Contact />}></Route>
        <Route
          exact
          path="customerReviews"
          element={<CustomerReview />}
        ></Route>

      </Routes>
    </Router> */}
    <Router>
      <NavBar />
      <Routes>
      <Route exact path='/contactUs' element={<Contact/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/customerReviews' element={<CustomerReview />} />
        {/* <Route path='/newreview' element={<NewReview/>}/> */}
        <Route path='/review' element={<CustomerReview/>}/>
        {/* <Route path='/cars' element={<Cars />} /> */}
        </Routes>
      </Router>

  </div>
  );
}

export default App;
