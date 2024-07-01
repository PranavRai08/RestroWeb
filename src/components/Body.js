import RestaurantCard from "./RestaurantCard";
// , {withPromotedLabel}
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContext";


const Body = () =>{
    const [List, setresList] = useState([]);  // innitially we did't pass any thing in List its empety.
    const [filteredRestaurant, setfilteredRestaurant] = useState([]); // i create this for filer only we did not change in restoro list.
    const [searchText, setSearchText] = useState("");
    
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    //API
    useEffect(() => {
      fetchData();
      },[]);

     const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            
            // https://proxy.cors.sh/
        );
        const json = await data.json();
        console.log(json);

        // optional chaining
        setresList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     };

     //conditional rendering.
    //  if(List.length === 0){
    //    return <Shimmer/>;
    //  }

    const OnlineStatus = useOnlineStatus();

    if(OnlineStatus === false){
        return <h1>Looks like you're offline!! 
            Please check your internet connection
            </h1>
    }

    const { setUserInfo, loggedInUser} = useContext(UserContext);

    

    
    //Ternary operator  (Condition ? Result1 : Result2) if condition is full fill than Result1 is render other wise Result2 is render.
    return List.length === 0 ? (<Shimmer/>) : (
        <div className="body">
        <div className="filter flex">
            <div className="p-4 m-4">
                <input type="text" data-testid="searchInput" placeholder="Search Restaurant's...."  className="border-none p-2 bg-slate-200 border rounded-lg font-bold hover:placeholder-orange-500 shadow-md" value={searchText} 
                onChange={(e)=>{ //where e is normal call back method or we can say normal event hendler.
                    setSearchText(e.target.value);
                    
                }}/>
                <button className="px-4 py-2 m-4 text-green-500 rounded-lg shadow-md font-bold hover:bg-slate-200" 
                    onClick={() =>{
                    const filteredRestaurant = List.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                
                );
                setfilteredRestaurant(filteredRestaurant);

                }}>Search</button>
            </div>
            <div className="search m-4 flex items-center">
                {/* <input className="border-none p-2 bg-slate-200 border rounded-lg" onChange={(e)=>setUserInfo(e.target.value) } value={loggedInUser} /> */}
            </div>
            <div className="flex items-center">
            <button 
            className="px-4 py-2 text-green-500 rounded-lg shadow-md font-bold hover:bg-slate-200"
            onClick={()=>{
                const filteredList = List.filter(
                    (res) => res.info.avgRating > 4  );
                    setresList(filteredList);
                    // console.log(filteredList );
            }} >
                Top Rated Restaurants
                </button>
            </div>
        </div>
        <h1 className="p-4  font-bold text-2xl">Top restaurant chains in Greater Noida</h1>
        <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
        <Link
        key={restaurant.info.id}
        to={"/restaurants/" + restaurant.info.id}
        >
            {
                // if the restaurant is promoted then add a promoted label to it.
                restaurant.info.Promoted ? (<RestaurantCardPromoted/>) : (<RestaurantCard resData = {restaurant} />)
            }  
            {/* aggregatedDiscountInfoV3             */}
         </Link>
        ))}
        </div>
        </div>
    )
}

export default Body;