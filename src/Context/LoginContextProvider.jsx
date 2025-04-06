import { Children } from "react";
import { loginContext } from "./loginContext";



const loginContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
    return(
        <loginContext.Provider value={{user,setUser}} >
            {children}
        </loginContext.Provider>
    )
}
export default loginContextProvider