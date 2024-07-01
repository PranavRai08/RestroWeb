import { CDN_URL } from "../utils/constants";

    

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name, avgRating, cuisines, costForTwo} = resData?.info;
    return(
        <div data-testid="resCard" className=" p-4 ml-2 mb-4 mr-4 w-56 bg-slate-50 rounded-lg hover:bg-slate-200 cursor-pointer">
            <img className="rounded-lg w-80 h-40 shadow-xl to-black"
            alt="res-logo"
            src={CDN_URL + resData.info.cloudinaryImageId}
            />
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>⭐ {avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

//Higher Order Component
//Input - RestaurantCard =>> RestaurantCardPromoted

// Syntax High Order Function
// variable High OrderFunction = (Component) =>{
//     return() =>{
//         return (
//             <>
//             Enhanced Component
//             </>
//         )
//     }
// }
export const withPromotedLabel = (RestaurantCard) =>{
    return(props) =>{
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard{...props}/>
            </div>
        );
    }
}

export default RestaurantCard;
