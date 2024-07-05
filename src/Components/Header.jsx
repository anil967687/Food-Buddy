import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/customHooks/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = ( ) => {
    const [btnName,setBtnName] = useState("Login");

    const OnlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    //if no dependency array useEffect called every render
    //if dependency array is empty useEffect called on initialrender just once
    //if something is in dependency array useEffect called/render when something update in dependency array

    return (
        <div className = "flex justify-between bg-pink-100 shadow-lg m-2" >
            <div>
                <img className = "w-40"  src={LOGO_URL}/>
                </div>
            <div className = "flex items-center" >
                <ul className = "flex p-4 m-4" >
                    <li className = "px-4 font-semibold" >
                        Online Status : {OnlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className = "px-4 font-semibold" > 
                       <Link to="/" > Home </Link>  
                    </li>
                    <li className = "px-4 font-semibold" > 
                       <Link to="/grocery" > Grocery </Link>  
                    </li>
                    <li className = "px-4 font-semibold" > 
                    <Link to="/about" > About </Link>      
                    </li>
                    <li className = "px-4 font-semibold" >
                    <Link to="/contact" > Contact </Link>  
                    </li>
                    <li className = "px-4 font-semibold" > Cart </li>
                    <li className = "px-4" >
                    <button className="font-semibold" onClick={()=>{btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName} </button>
                    </li>
                    <li className = "px-4 font-bold" > {loggedInUser} </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;