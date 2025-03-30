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
import Aniversary from "./Ocassion/Aniversary.jsx";
import Wedding from "./Ocassion/Wedding.jsx";
import Birthday from "./Ocassion/Birthday.jsx";
import GiftsForMen from "./Ocassion/GiftsForMen.jsx";
import Congratulations from "./Ocassion/Congratulations.jsx";
import BigGestures from "./Ocassion/BigGestures.jsx";
import AddCart from "./AddCart/AddCart.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
        <Nav/>
        <Features/>
        <Outlet/>
        <Footer/>
      </>
  
  );
}
export default App;
