import "./CardItem.css";

function CardItem() {
  return (
    <>
      <div className="cardItemContainer">
        <div className="cardItemImageContainer">
          <img
            className="cardItemImage"
            src="src\assets\CartFlowerImages.webp"
          />
        </div>
        <div className="cardItemFlowerNameContainer">
          <p className="cartItemFlowerName">Sun Kisses</p>
          <p>Price : $6000</p>
        </div>
        <div className="cartItemDateAndTimeContainer">
          <p>Date : 30/11/25</p>
          <p>Time : 9AM - 12PM</p>
        </div>
        <div>
          <button className="cardItemButton">Buy</button>
          <button className="cardItemButton">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
export default CardItem;
