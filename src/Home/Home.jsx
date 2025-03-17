import { useState } from "react";
import Features from "../FeaturesList.jsx";
import Heading from "../Heading.jsx";
import ScrollingCards from "./ScrollingCards.jsx";
import Card from "../Card.jsx";
import Nav from "../Navbar.jsx";
import Banner from "./Banner.jsx";
import "./Home.css";
import OccassionCard from "./OccassionCard.jsx";
import { NavLink,Link } from "react-router-dom";
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
  const customer1 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "05-03-2019",
    reviewContent:
      `"Absolutely stunning flowers! They arrived fresh and on time. Highly recommend!"`,
    reviewerName: "Aarav Mehta",
  };
  const customer2 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "12-07-2021",
    reviewContent:
      `"Good service but the flowers could have been arranged better. Still loved them!"`,
    reviewerName: "Priya Sharma",
  };
  const customer3 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "30-01-2023",
    reviewContent:
      `"The bouquet was gorgeous, and the fragrance lasted for days. Will order again!"`,
    reviewerName: "Rohan Verma",
  };
  const customer4 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "18-06-2022",
    reviewContent:
      `"Beautiful flowers but slightly delayed delivery. Otherwise, great experience!"`,
    reviewerName: "Sanya Kapoor",
  };

  const customer5 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "08-09-2020",
    reviewContent:
    `"Perfect gift for my mom's birthday. She absolutely loved it!"`,
    reviewerName: "Vikram Joshi",
  };

  const customer6 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "14-02-2018",
    reviewContent:
      `"Ordered for Valentine's Day. My partner was delighted! Beautiful arrangement!"`,
    reviewerName: "Megha Singh",
  };

  const customer7 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "22-11-2017",
    reviewContent:
      `"Lovely flowers, but a bit expensive. Still, the quality is worth it!"`,
    reviewerName: "Rahul Tiwari",
  };

  const customer8 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐⭐",
    reviewDate: "01-05-2021",
    reviewContent:
      `"Excellent customer service and a beautiful arrangement. Will buy again!"`,
    reviewerName: "Ananya Gupta",
  };

  const customer9 = {
    imgUrl:
      "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
    reviewStars: "⭐⭐⭐⭐",
    reviewDate: "10-08-2016",
    reviewContent:
      `"The flowers were vibrant and fresh! Just wished the delivery was quicker."`,
    reviewerName: "Kunal Sharma",
  };
  const reviews = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
    customer7,
    customer8,
    customer9,
  ];

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
      <Heading
        heading1="Celebrate with flowers"
        heading2="May the fragarence of happiness elevate your occasion"
      />
      <div className="occassionConatainer">

        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/birthday_d_split_illustration_830_1738154831704" />

   

        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/anniversary_d_split_illustration_830_1738154869104" />
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/wedding_gifts_d_split_illustration_830_1738155423856" />
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/grand_gestures_d_split_illustration_830_1738230308822" />
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/gifts_for_men_d_split_illustration_830_1738154921657" />
        <OccassionCard occassionImageUrl="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt10prodlp/banners/congratulations_d_split_illustration_830_1738155459964" />
      </div>
      <Heading
        heading1="Best Selling"
        heading2="Floral arrangements that gets the most love"
      />
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
        <p className="sentimentTitle sentimentTitle1">SOFT SENTIMENTS ,</p>
        <p className="sentimentTitle sentimentTitle2">
          WHISPERED THROUGH FLOWERS
        </p>
        <div className="sentimentButtons">
          <div className="sentimentButtonColumn">
            <button className="sentimentButton">
              <p>SEND</p>
              <p>THANK YOU</p>
            </button>
            <button className="sentimentButton">
              <p>SEND</p>
              <p>GET WELL SOON</p>
            </button>
            <button className="sentimentButton">
              <p>SEND</p>
              <p>CONGRATS</p>
            </button>
          </div>
          <div className="sentimentButtonColumn">
            <button className="sentimentButton">
              <p>FOR</p>
              <p>HOUSEWARMING</p>
            </button>
            <button className="sentimentButton">
              <p>FOR</p>
              <p>BABY SHOWER</p>
            </button>
            <button className="sentimentButton">
              <p>FOR</p>
              <p>THE HOST</p>
            </button>
          </div>
        </div>
      </div>
      <div className="customerReviewContainer">
        <Heading heading1="Customer Reviews" />
        <ScrollingCards Reviews={reviews} />
      </div>
   
    </>
  );
}

export default Home;
