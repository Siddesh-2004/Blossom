import "./Footer.css";
import Heading from "./Heading"
function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="followUsContainer">
          <div className="followUsImagContainer">
            <img className="followUsImage" 
            src="src\assets\linkedin.jpg" 
            alt="LinkedIn:"></img>
          </div>
          <div className="followUsImageContainer">
            <img
              className="followUsImage"
              src="src\assets\instagram.jpg"
              alt="Instagram:"
            ></img>
          </div>
          <div className="followUsImageContainer">
            <img
              className="followUsImage facebookImage"
              src="src\assets\facebook.jpg"
              alt="Facebook:"
            ></img>
          </div>
        </div>
        <div className="linksListContainer">
          <ul className="linksList">
            <li>ABOUT US</li>
            <li>FAQ</li>
            <li>CONTACT US</li>

          </ul>
        </div>
        <div className="thanksGiving">
          <Heading heading1="Thank You For Visting Blossom ," heading2="We hope We Made A Smile Bloom"  />
        </div>
      </div>
    </>
  );
}
export default Footer;
