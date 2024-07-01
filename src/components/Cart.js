import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handelClearCart = () =>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">   
            <h1 className="text-2xl text-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
                <button className="p-2 bg-zinc-500 rounded-lg text-white" onClick={handelClearCart}>Clear Cart</button>
                {cartItems.length=== 0 && (<h1>Cart is empty. Add some items to cart!</h1>)}
            </div>
        </div>
    );
};

export default Cart;