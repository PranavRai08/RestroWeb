import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) => {
    
    const dispatch = useDispatch(); //just like we have useSelector for reading for dispatching we use useDispatch.
    const handleAddItem = (item) =>{
        //Dispatch an action.
        dispatch(addItem(item));
    };
    return(
            <div>
                {items.map((item) => (
                     <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left">
                        <img src={CDN_URL + item.card.info.imageId} alt="" className="w-20 flex float-right rounded-lg" />
                     <div>
                        <span>{item.card.info.name}</span> <br/>
                        <span> ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}  </span> <br />
                        <span>⭐ {item.card.info.ratings.aggregatedRating.rating}</span> &nbsp;
                        <span>({item.card.info.ratings.aggregatedRating.ratingCount})</span>
                        <button className="text-green-500  bg-white rounded-lg shadow-lg flex float-right p-1" onClick={() => handleAddItem(item)}>ADD</button>
                     </div>
                     <p className="text-xs">{item.card.info.description}</p>
                     
            </div>
        ))}
        </div>
    );
};

export default ItemList;