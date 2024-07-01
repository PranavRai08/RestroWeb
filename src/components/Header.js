import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [Loginbtn, Setloginbtn] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    //Subscribing to the store using selector and selector is hook and hook is the normal javascript function.
    const cartItems = useSelector((store) => store.cart.items);

    return(
        
        <div className="flex items-center justify-between bg-blue-50 shadow-lg font-bold">
            <div className="logo-container">
                <div className="m-4">
                <img className="w-10 m-1" src={LOGO_URL} alt="" />
                </div>
            </div>
            <div className="">
                <ul className="flex p-4 m-4 space-x-5 ">
                    <li className="p-2 ">Status: {onlineStatus ? "Online ✅" : "Offline 🟥"}</li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg"><Link to="/">Home</Link></li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg"><Link to="/about">About</Link></li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg"><Link to="/contect">Contect</Link></li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="hover:bg-slate-400 p-2 rounded-lg"><Link to="/cart">🛒 ({cartItems.length} items)</Link></li>
                    <button className="login p-2 text-green-500 rounded-lg shadow-md font-bold hover:bg-slate-200 " onClick={()=>{
                        Loginbtn === "Login" ? Setloginbtn("Logout") : Setloginbtn("Login");}
                        }>{Loginbtn}</button>
                    {/* <li className="hover:bg-slate-400 p-2 rounded-lg font-bold">{loggedInUser}</li>     */}
                </ul>
            </div>
        </div>
    )
}

export default Header;  // giving component 