import { useState } from "react";
import "./card.css";


function Card({ flowers }) {
  
  return (
    <>
      
        <div className="cardContainer" >
          <div className="imageContainer">
            <img src={flowers.src} className="img1" />
          </div>
          <div className="contentContainer formatContainer">
            <p className="flowerName content">{flowers.name} </p>
          </div>
          <div className="priceContainer formatContainer">
            <p className="priceValue content">$ {flowers.price}</p>
          </div>
          <div className="reviewAndAvalibilityContainer formatContainer">
            <p className="content review"> {flowers.rating}/5 ⭐ (120)</p>
            <p className="availabityStatus content">
              {flowers.avalablityStatus}
            </p>
          </div>
        </div>
    
    </>
  );
}

export default Card;
