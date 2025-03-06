import { useState } from "react";
import Features from "../FeaturesList.jsx";

import Card from "../Card.jsx";
import Nav from "../Navbar.jsx";
import Banner from "./Banner.jsx";
import "./Home.css";
import OccassionCard from "../OccassionCard.jsx";

function Home() {
  let img1 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-mauve-surprise-385687-m.jpg";
  const img2 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-a-lot-like-love-hamper-149787-m.jpg";
  let img3 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-100-days-of-love-201246-m.jpg";
  const img4 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-a-vibrant-purity-182378-m.jpg";
  const img5 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-the-eternal-love-201241-m.jpg";
  const img6 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-love-in-the-moonlight-270021-m.jpg";
  const img7 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-rosy-gardenia-177811-m.jpg";
  const img8 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-regal-blossom-389731-m.jpg";
  return (
    <>
     
      <Banner
        banners={{
          images: [
            "https://www.mayflower.in/cdn/shop/files/1880_Banner_Home_Main_Fresh_Flowers.jpg?v=1735736721",
            "https://www.mayflower.in/cdn/shop/files/1880_Banner_Home_Hydrangea.jpg?v=1631626710",
            "https://www.mayflower.in/cdn/shop/files/1880_Banner_Home_Bunch.jpg?v=1638691960",
          ],
        }}
      />
      <p className="occassionTitle">Celebrate with flowers</p>
      <p className="occasionSubtitle">May the fragarence of happiness elevate your occasion</p>
      <div className="occassionConatainer">
            <OccassionCard 
          occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/birthday_d_split_illustration_830_1738154831704"/>
            <OccassionCard 
          occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/anniversary_d_split_illustration_830_1738154869104"/>
           <OccassionCard 
          occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/wedding_gifts_d_split_illustration_830_1738155423856"/>
           <OccassionCard 
          occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/grand_gestures_d_split_illustration_830_1738230308822"/>
           <OccassionCard 
          occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/gifts_for_men_d_split_illustration_830_1738154921657"/>
           <OccassionCard 
          occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/congratulations_d_split_illustration_830_1738155459964"/>

      </div>
      <p className="bestSellingTitle">Best Selling</p>
      <p className="bestSellingSubtitle">Floral arrangements that gets the most love</p>

  
<div className="bestSellingContainer ">
     
      <Card
          flowers={{
            src: img1,
            name: "SkyPink Roses",
            rating: 4.6,
            avalablityStatus: "In Stock",
            price: 6999,
          }}
        />
        <Card
          flowers={{
            src: img2,
            name: "Chocolately Delight",
            rating: 4.0,
            avalablityStatus: "Out of Stock",
            price: 9999,
          }}
        />
        <Card
          flowers={{
            src: img3,
            name: "Love With Red",
            rating: 4.9,
            avalablityStatus: "In Stock",
            price: 3999,
          }}
        />
        <Card
          flowers={{
            src: img4,
            name: "Fulfilled Happiness",
            rating: 5,
            avalablityStatus: "Out of Stock",
            price: 10999,
          }}
        />

</div>
<div className="backgroundImageContainer">
<p className="sentimentTitle">SOFT SENTIMENTALS, <br/>WHISPERED THROUGH FLOWERS</p>
  <div className="sentimentButtons">
    <button className="sentimentButton">SEND<br/> THANK YOU</button>
    <button className="sentimentButton">SEND <br/>GET WELL SOON</button>
    <button className="sentimentButton">SEND <br/>CONGRATS</button>
  </div> 
  <div className="sentimentButtons">
    <button className="sentimentButton">FOR <br/>HOUSEWARMING</button>
    <button className="sentimentButton">FOR <br/>BABYSHOWER</button>
    <button className="sentimentButton">FOR <br/>THE HOST</button>
  </div>
</div>

    </>
  );
}

export default Home;
