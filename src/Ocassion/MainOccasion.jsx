import React from 'react'
import './MainOccasion.css';
import Heading from "../Heading"
import Card from '../Card';
import OccasionCardsContainer from './OccasionCardsContainer';
const MainOccasion = () => {

  const img5 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-the-eternal-love-201241-m.jpg";
  const img6 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-love-in-the-moonlight-270021-m.jpg";
  const img7 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-rosy-gardenia-177811-m.jpg";
  const img8 =
    "https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt7prodlp/products/p-regal-blossom-389731-m.jpg";
    // let images=[img1,img2,img3,img4];
       
    
  return (
    <>
        <Heading heading1="ANIVERSARY" heading2='"Love grows stronger with every bloom'/>
        <OccasionCardsContainer page="Aniversary"/>
        <Heading heading1="Big Gestures" heading2="When words aren't enough, let flowers speak."/>
        <OccasionCardsContainer page="BigGestures"/>
        <Heading heading1="Birthday" heading2="Blooming wishes for a beautiful year ahead!"/>
        <OccasionCardsContainer page="Birthday"/>
        <Heading heading1="Congratulations" heading2="Success smells sweeter with a touch of flowers!"/>
        <OccasionCardsContainer page="Congratulations"/>
        <Heading heading1=" Gifts For Men" heading2=""/>
        <OccasionCardsContainer page="GiftsForMen" />
        <Heading heading1=" Wedding" heading2="Love, laughter, and flowers for a lifetime together."/>
        <OccasionCardsContainer page="Wedding" />
    </>
  )
}

export default MainOccasion;
