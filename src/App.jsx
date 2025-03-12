import { useState } from "react";
import Home from "./Home/Home";
import Nav from "./Navbar";
import Features from "./FeaturesList";
import "./App.css";
import Footer from "./Footer.jsx";
import Contact from "./Contact/Contact.jsx";
import About from "./About/About.jsx";
import Help from "./Help/Help.jsx";
import Login from "./Login/Login.jsx"
import Signup from "./Login/Signup.jsx"

function App() {
  return (
    <>
      <div className="siddesh">
        {/* <Nav />
        <Features /> */}
        <Signup/>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
