import "./Navbar.css";
import logo from "./assets/logoOriginal.jpg";
function Nav() {
  return (
    <>
      <div className="navContainer">
        <div className="navTabListConatiner1">
          <ul className="navTabList1">
            <li>Home</li>
            <li>About</li>
           
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="menuContainer">
    
<select id="options" name="options"  className="dropDownMenu">
  <option value="" disabled selected hidden>MENU</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
        </div>
        <div className="navTabListContainer2">
          <ul className="navTabList2">
            <li className="searchBarlistElement">
              <div className="searchBarContainer">
                <input type="text"className="searchBar" placeholder="Search"/>
                  <svg
                    className="magnifyingGlass"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="white"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
               
              </div>
            </li>
            <li>
              <button className="loginButton">Login</button>
            </li>
            <li>
            
                <div className="shoppingCartContainer">
                    <svg
                      className="shoppingCart"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="white"
                    >
                      <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                    </svg>
           
              </div>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}
export default Nav;
