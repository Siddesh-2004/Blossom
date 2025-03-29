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
import FlowerPage from "./FlowerPage.jsx";
import MainOccasion from "./Ocassion/MainOccasion.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import AddCart from "./AddCart/AddCart.jsx";
let obj = {
  images: [
    " https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt12prodlp/products/p-mauve-surprise-385687-m.jpg",
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt12prodlp/products/p-mauve-surprise-385687-m.jpg",
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt12prodlp/products/p-mauve-surprise-385687-m.jpg",
  ],
  flowerName: "Sunflower Kisses",
  price: "6000",
  description:
    "Peace, calm and tranquil colors are an integral part of this gorgeous ensemble. Colors like blue, pink and whites form the highlights of this bunch. Be it for a birthday or an anniversary or just to say thank you, this bunch can be sent online for any occasion. Flowers such as hydrangea(color and flower seasonal) along with lilies and a tad bunch of chrysanthemums wrapped in beautiful paper, hand tied with lovely ribbons, this bunch is surely one of the books. Due to a rare occasion due to seasonal factors, flowers or colors may vary but we will try to stick to the same color theme and flowers. Limited to Mumbai / Bombay Delivery only.",
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/Birthday" element={<Birthday />} />
      <Route
        path="/Birthday/flowerDetails"
        element={<FlowerPage flowersdata={obj} />}
      />
      <Route path="/Aniversary" element={<Aniversary/>} />
      <Route path="/Birthday" element={<Birthday />} />
      <Route path="/Congratulations" element={<Congratulations />} />
      <Route path="/BigGestures" element={<BigGestures/>} />
      <Route path="/GiftsForMen" element={<GiftsForMen/>} />
      <Route path="help" element={<Help />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="login/signup" element={<Signup />} />
      <Route path="addCart" element={<AddCart />} />
      <Route path="Occasions" element={<MainOccasion />} />
      <Route path="Occasions/Aniversary" element={<Aniversary/>}/>
      <Route path="Occasions/Birthday" element={<Birthday/>}/>
      <Route path="Occasions/Congratulations" element={<Congratulations/>}/>
      <Route path="Occasions/GiftsForMen" element={<GiftsForMen/>}/>
      <Route path="Occasions/BigGestures" element={<BigGestures/>}/>




    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
