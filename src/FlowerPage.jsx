import "./FlowerPage.css";
import { useEffect, useState } from "react";
function FlowerPage({flowersdata}) {
  const images=flowersdata.images
  let [index, setIndex] = useState(0);
  function imageChange() {
    setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  }
  useEffect(imageChange, []);
  function back() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(images.length - 1);
    }
  }
  function front() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(images.length - 1);
    }
  }
  return (
    <>
      <div className="flowerPage">
        <div className="imageBox">
          <div className="backButtonBox buttonsBox">
            <button className="buttons" onClick={back}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
              </svg>
            </button>
          </div>
          <div className="imagesBox">
            <img src={images[index]}></img>
          </div>
          <div className="forwardButtonBox buttonsBox">
            <button className="buttons" onClick={front}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="contentBox">
          <div className="flowerNameBox">
            <p className="flowerName">{flowersdata.name}</p>
          </div>
          <div className="flowerDescriptionBox">
            <p className="flowerDescription">
            {flowersdata.description}
            </p>
          </div>
          <div className="flowerPriceBox">
            <p className="flowerPrice">Price :${flowersdata.price}</p>
          </div>
          <div className="addcartBox">
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default FlowerPage;
