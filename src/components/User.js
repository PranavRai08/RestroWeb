import { useState } from "react";

const User = (props) =>{
    const[count, setCount] = useState(0);
    const[count1] = useState(1);
    return(
        <div className="user">
            <h1>Count: {count}</h1>
            <button onClick={() =>(setCount(count+1))}>Count Increase</button>
            <h1>Count: {count1}</h1>
        <h1> Name : {props.name}</h1>
        <h2>From : {props.from}</h2>
        </div>
    );
};

export default User;