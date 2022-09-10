import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import CustomerReview from "./Components/CustomerReview";
import Review from "./Components/ReviewDelete";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Route exact path="./" element={<NavBar/>}></Route>

        <Route exact path="contactUs" element={<Contact />}></Route>
        <Route
          exact
          path="customerReviews"
          element={<CustomerReview />}
        ></Route>
        <Review />
      </Router>
    </div>
  );
}

export default App;
