import "./ScrollingCards.css";
import ReviewCard from "./ReviewCard.jsx";
import { useState } from "react";
function ScrollingCards({Reviews}) {

let [reviewCardNumber,setreviewCardNumber]=useState(0);
function forwardClick(){
  if (reviewCardNumber+3<Reviews.length) {
    reviewCardNumber+=3;
    setreviewCardNumber(reviewCardNumber);
  }else{
    reviewCardNumber=0;
    setreviewCardNumber(reviewCardNumber);
  }
}
function backwardClick(){
  if (reviewCardNumber>0) {
    reviewCardNumber-=3;
    setreviewCardNumber(reviewCardNumber);
  }
}

let customer1Review=Reviews[reviewCardNumber];
let customer2Review=Reviews[reviewCardNumber+1];
let customer3Review=Reviews[reviewCardNumber+2];


  return (
    <>
      <div className="scrollingCardsAndButtonsContainer">
        <button className="scrollingArrowButton" onClick={backwardClick} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="45px"
            fill="black"
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </button>

        <div className="scrollingCardsContainer">
          <ReviewCard imgUrl={customer1Review.imgUrl} reviewStars={customer1Review.reviewCardNumber} reviewDate={customer1Review.reviewDate} reviewContent={customer1Review.reviewContent} reviewerName={customer1Review.reviewerName}/>
          <ReviewCard imgUrl={customer2Review.imgUrl} reviewStars={customer2Review.reviewCardNumber} reviewDate={customer2Review.reviewDate} reviewContent={customer2Review.reviewContent} reviewerName={customer2Review.reviewerName}/>
          <ReviewCard imgUrl={customer3Review.imgUrl} reviewStars={customer3Review.reviewCardNumber} reviewDate={customer3Review.reviewDate} reviewContent={customer3Review.reviewContent} reviewerName={customer3Review.reviewerName}/>
        </div>
       
          <button className="scrollingArrowButton" onClick={forwardClick} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="100px"
              viewBox="0 -960 960 960"
              width="45px"
              fill="black"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </button>
      
      </div>
    </>
  );
}

export default ScrollingCards;
