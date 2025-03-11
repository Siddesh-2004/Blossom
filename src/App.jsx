import { useState } from "react";
import Home from "./Home/Home";
import Nav from "./Navbar";
import Features from "./FeaturesList";
import './App.css'
import Footer from "./Footer.jsx";
import Contact from "./Contact/Contact.jsx"
function App() {
  return (
    <>

    <div className="siddesh">
     <Nav />
     <Features />
    <Home/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
