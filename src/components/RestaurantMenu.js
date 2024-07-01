// import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import {MENU_API} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenue = () => {  // RestaurantMenue has a single responsibility it just display the data on the ui.
    // modularity means we break down our code in small small diff diff modules so, that our code is more maintainable
    // and testable because if we have a single unit so that we have to wright test cases for that unit only.



    // const [resInfo, setResInfo] = useState(null);

    // de structured
    const {resId} = useParams();
    console.log(resId);

    const resInfo = useRestaurantMenu(resId); //custom hook 

    // useEffect(() =>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async() =>{
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();

    //     console.log(json);
      
  
    //     setResInfo(json.data);   // as we got json then we fill resInfo with json.data
    //     // .cards[2].card.card.info
    // };

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo === null) return <Shimmer/>


    // de structured - we can extract data from arrays and objects and assign them to variables.
    const {name, cuisines, avgRating, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(itemCards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h4 className="font-bold">{avgRating} &nbsp; {totalRatingsString} &nbsp; {costForTwoMessage}</h4>
            
            {/* categories accordions */}
            {categories.map((category, index)=>(
            <RestaurantCategory key={category?.card?.card?.name} data={category?.card?.card}  
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
            />))}
            
            {/* <ul>
                {itemCards.map((item) => (
                <li key={item.card.info.id}>{item.card.info.name}</li>))}
            </ul> */}

        </div>
    );
};

export default RestaurantMenue;