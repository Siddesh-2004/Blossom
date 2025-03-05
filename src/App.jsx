import { useState } from "react";
import Home from "./Home/Home";
import Nav from "./Navbar";
import Features from "./FeaturesList";

function App() {
  return (
    <>
     <Nav />
     <Features />
      <Home />
     
    </>
  );
}

export default App;
