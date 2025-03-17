import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { useState } from "react";
import Home from "./Home/Home";
import Nav from "./Navbar";
import Features from "./FeaturesList";
import "./App.css";
import Footer from "./Footer.jsx";
import Contact from "./Contact/Contact.jsx";
import About from "./About/About.jsx";
import Help from "./Help/Help.jsx";
import Login from "./Login/Login.jsx";
import Signup from "./Login/Signup.jsx";
import Aniversary from "./Ocassion/Aniversary.jsx";
import Wedding from "./Ocassion/Wedding.jsx";
import Birthday from "./Ocassion/Birthday.jsx";
import GiftsForMen from "./Ocassion/GiftsForMen.jsx";
import Congratulations from "./Ocassion/Congratulations.jsx";
import BigGestures from "./Ocassion/BigGestures.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="help" element={<Help />} />
      <Route path="about" element={<About/>} />
      <Route path="contact" element={<Contact/>} />
      <Route path="login" element={<Login/>} />
    </Route>
     
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
