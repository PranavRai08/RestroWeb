import { useState } from "react";

const Contect = () =>{
    const[message, setMessage] = useState('');
    const handleClick = () =>{
        setMessage("Our team contect you soon. Thank you!")
        console.log(setMessage);
    };
    return(
        <div className="text-center p-2">
            <h1 className="text-center p-2">Contect Us Page</h1>
            <div>
                <input className="border border-black p-1 m-4" type="text" placeholder="Enter Your Name" /> 
                <input className="border border-black p-1" type="text" placeholder="Enter Your Message" /><br /><br />
                <button className="border border-black p-1 bg-yellow-400 rounded-lg" onClick={handleClick} >Submit</button>
            </div>
        </div>
    );
};

export default Contect;