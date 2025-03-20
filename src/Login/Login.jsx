import "./Login.css";
import { Link, NavLink } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="loginCardContainer">
        <div className="loginCard">
          <div className="loginHeadingContainer">
            <h1 className="LoginHeading">Login</h1>
          </div>
          <form>
            <div className="usernameContainer">
              <label>Email-Id:</label>
              <input type="email" placeholder="Enter your email-id"></input>
            </div>
            <div className="usernameContainer">
              <label>Password:</label>
              <input type="password" placeholder="Enter your password"></input>
            </div>
          </form>
          <div>
            <button className="loginButton">Login</button>
          </div>
          <div className="signup">
             or  <Link to='signup'>sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
