import { useSelector,useDispatch } from "react-redux";
import "./Signup.css";

function Signup() {
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <>
      <div className="loginCardContainer">
        <div className="loginCard">
          <div className="loginHeadingContainer">
            <h1 className="LoginHeading">Sign Up</h1>
          </div>
          <form onSubmit={()=>{
            
          }}>
          <div className="usernameContainer">
              <label>Username:</label>
              <input type="text" placeholder="Enter username"></input>
            </div>
            <div className="usernameContainer">
              <label>Email-Id:</label>
              <input type="email" placeholder="Enter your email-id"></input>
            </div>
            <div className="usernameContainer">
              <label>Password:</label>
              <input type="password" placeholder="Enter password"></input>
            </div>
          </form>
          <div>
            <button className="loginButton">Sign Up</button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Signup;
