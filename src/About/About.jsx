import Heading from "../Heading.jsx";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutContainer">
        <Heading heading1="About Us" heading2="" />
        <p className="aboutContent">
          <h1>Welcome to Blossom,</h1>
          your one-stop destination for fresh and beautiful flowers! We are
          passionate about bringing joy and elegance into your life through our
          exquisite floral arrangements, carefully crafted for every occasion.
          <h1> Who We Are? </h1>
          At Blossom, we believe that flowers have the power to express
          emotions, celebrate milestones, and brighten up everyday moments.
          Founded in 2025, we have been dedicated to delivering high-quality,
          handpicked flowers to our customers with love and care. Our team
          consists of expert florists who design stunning bouquets and
          arrangements tailored to your needs.
          <h1>Our Mission </h1>
          <ul>
            <li>
              Mission is to make gifting and decorating with flowers effortless
              and meaningful
            </li>
            <li>

              We strive to provide fresh, vibrant, and long-lasting flowers
              while ensuring exceptional customer service.
            </li>
            <li>
              Whether it's; a birthday, wedding, anniversary, or just a simple
              gesture of love, we are here to make every moment special.
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default About;
