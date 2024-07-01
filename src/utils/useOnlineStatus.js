import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [OnlineStatus, setOnlineStatus] = useState(true);


    useEffect( () =>{ // we want this component to execute once to check wheater devise internet is online or offline. In which we use event listenre which keep traking internet status.
        window.addEventListener("offline", () =>{
            setOnlineStatus(false);
        })

        window.addEventListener("online", () =>{
            setOnlineStatus(true);
        })
                      

    }, []);

    return OnlineStatus;

}

export default useOnlineStatus;