import { useState } from "react";
import Features from "./FeaturesList.jsx";
import './App.css'
import Card from './Card.jsx'
import Nav from './Navbar.jsx'
import FlowerPage from "./FlowerPage.jsx";
function App() {
  let img1="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-mauve-surprise-385687-m.jpg";
  const img2="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-a-lot-like-love-hamper-149787-m.jpg"
  let img3="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-100-days-of-love-201246-m.jpg";
  const img4="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-a-vibrant-purity-182378-m.jpg"
  const img5="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-the-eternal-love-201241-m.jpg"
  const img6="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-love-in-the-moonlight-270021-m.jpg"
  const img7="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-rosy-gardenia-177811-m.jpg"
  const img8="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-regal-blossom-389731-m.jpg"
  return (
    <>
 <Nav />
 <Features/>
 <Banner/>
 <div className="container">
    <Card flowers={{src:img1,name:"SkyPink Roses",rating:4.6,avalablityStatus:"In Stock",price:6999}} />
    <Card flowers={{src:img2,name:"Chocolately Delight",rating:4.0,avalablityStatus:"Out of Stock",price:9999}} />
    <Card flowers={{src:img3,name:"Love With Red",rating:4.9,avalablityStatus:"In Stock",price:3999}} />
    <Card flowers={{src:img4,name:"Fulfilled Happiness",rating:5,avalablityStatus:"Out of Stock",price:10999}} />
    <Card flowers={{src:img5,name:"Morning Sunflowers",rating:4.9,avalablityStatus:"In Stock",price:6999}} />
    <Card flowers={{src:img6,name:"Morning Sunflowers",rating:3.6,avalablityStatus:"IOut of Stock",price:6999}} />
    <Card flowers={{src:img7,name:"Morning Sunflowers",rating:4.8,avalablityStatus:"Out of Stock",price:6999}} />
    <Card flowers={{src:img8,name:"Morning Sunflowers",rating:4.6,avalablityStatus:"In Stock",price:6999}} />
    </div>
  <FlowerPage flowersdata={{name:"BIRTHDAY FLAGERENCE",images:["https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt12prodlp/products/p-mauve-surprise-385687-m.jpg","https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt12prodlp/products/p-mauve-surprise-385687-5.jpg","https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt12prodlp/products/p-mauve-surprise-385687-2.jpg"],description:"Stunning, bright, sparkling, and so many adjectives that describe this glorious bunch of sunflowers. Brighten up anyone's day with this shimmering bunch of sunflowers. 15 - 20 sunflowers wrapped together in beautiful paper and finished off with ribbons, this bunch can be sent online for any occasion, be it a birthday, or an anniversary or just to send someone to let the know that you are thinking of them. Order these online and have them delivered at no extra charge in a few hours.",price:4000 }}/>
    </>
  );
}

export default App;
