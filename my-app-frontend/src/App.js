import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import OurRooms from './Components/OurRooms';
import About from './Components/About';
import Restaurant from './Components/Hotel';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/aboutUs">
          <About />
        </Route>
        <Route exact path="/ourRooms">
          <OurRooms />
        </Route>
        <Route exact path="/hotel">
          <Restaurant />
        </Route>
        <Route exact path="/contactUs">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
export default App;