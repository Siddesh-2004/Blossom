import "./ReviewCard.css";

function ReviewCard({
  imgUrl = "https://res.cloudinary.com/interflora/f_auto,q_auto,t_prodth/products/p-the-prosperity-duet-302335-m.jpg",
  reviewStars = "⭐⭐⭐⭐⭐",
  reviewDate = "21-11-2004",
  reviewContent = "Great Service ,beautiful flowers I made the right choice ,Selecting Blossoms for my wedding cermony",
  reviewerName = "Jeevika Acharya",
}) {
  return (
    <>
      <div className="reviewCardContainer">
        <div className="reviewCardImageContainer">
          <img
            className="reviewCardImage"
            src={imgUrl}
            alt="sunflower Blossoms"
          />
        </div>
        <div className="reviewCardStarsAndDateContainer">
          <p className="reviewCardStars">{reviewStars}</p>
          <p className="reviewCardDate">{reviewDate}</p>
        </div>
        <div className="reviewReviewContainer">
          <div className="reviewContentContainer">
            <p className="reviewContent" >{reviewContent}</p>
          </div>

          <div className="reviewCustomerNameContainer">
            <p className="reviewCustomerName">-{reviewerName}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReviewCard;
