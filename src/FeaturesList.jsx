import "./FeaturesList.css";
import { NavLink } from "react-router-dom";
function Features() {
  return (
    <>
      <div className="featuresContainer">
        <div>
          <p className="features">Flower Freshness</p>
        </div>
        
          <NavLink
            to="/Occasions"
            className={({ isActive }) => `${isActive ? "Active" : "Inactive"}`}
          >
          <div>
            Occasions
            </div>
          </NavLink>
        
        <div>
          <p className="features">Bouquet Customization</p>
        </div>
      </div>
    </>
  );
}
export default Features;
