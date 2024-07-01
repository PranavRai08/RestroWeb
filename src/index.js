import React,{lazy, Suspense, useEffect, useState, UserContext} from 'react';
import ReactDom from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contect from './components/Contect';
import Error from './components/Error';
import RestaurantMenue from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from "./utils/UserContext";
import Grocery from './components/Grocery';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
const Grocery = lazy (()=> import("./components/Grocery"));   // here is a function inside arrow function.





const AppLayout = () =>{    //root level component
    const [userInfo, setUserInfo] = useState();

    //authentication
    useEffect(()=> {
        //Make an API call and send username and password
        const data ={              // call api, got data, name came is as Pranav Rai
            name: "Pranav Rai"
        };
        setUserInfo(data.name);
    },[]);
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
            <div className="app">
                <Header/>
                {/* <Body/> */}
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contect",
                element: <Contect/>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenue/>,
            },
            {
                path: "/cart",
                element:<Cart/>,
            }
        ],
        errorElement: <Error/>,
    },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} /> );