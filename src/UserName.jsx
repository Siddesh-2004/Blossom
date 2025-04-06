import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { loginContext } from "./Context/loginContext";
import loginContextProvider from "./Context/LoginContextProvider";
function UserName() {
  // const {user} = useContext(loginContext)
 
  //   console.log(user.userName)
    
      
        return(
            <loginContextProvider>

        <NavLink
        to="/login"
        className={({ isActive }) => `${isActive ? "Active" : "Inactive"}`}
      >
        {" "}
        <button className="loginButton">Login</button>
      </NavLink>
            </loginContextProvider>
        )
    
}

export default UserName;
