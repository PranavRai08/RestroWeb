import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

//login button
it("Should render Header component with a login button ", () =>{
    render(
        <BrowserRouter> //we add this so that react testing library can understand and test "Link".
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginbtn = screen.getByRole("button"); // good way to find
    // const loginbtn = screen.getByRole("button", {name: "Login"}); // to find specific keyword

    //const loginbtn = screen.getByText("Login");
    expect(loginbtn).toBeInTheDocument();
});

// //cart
// it("Should render Header component with a cart", () =>{
//     render(
//         //we add this so that react testing library can understand and test "Link".
//         <BrowserRouter> 
//         <Provider store={appStore}>
//         <Header/>
//         </Provider>
//         </BrowserRouter>
//     );
//     const cartItem = screen.getByRole("button", {Cart: "0 items"}); // to find specific keyword
//     expect(cartItem).toBeInTheDocument();
// });


// //cart using rejecs
// it("Should render Header component with a cart", () =>{
//     render(
//         // <BrowserRouter> we add this so that react testing library can understand and test "Link".
//         <BrowserRouter> 
//         <Provider store={appStore}>
//         <Header/>
//         </Provider>    
//         </BrowserRouter>
//     );
//     const items = screen.getByText(/cart/); // (/Cart/) is called rejecs if we use this then we did not have to write like this ("button", {Cart: "0 items"});
//     expect(items).toBeInTheDocument();
// });

//login onclick
it("Should change login button to logout button.", () =>{
    render(
        // <BrowserRouter> we add this so that react testing library can understand and test "Link".
        <BrowserRouter> 
        <Provider store={appStore}>
        <Header/>
        </Provider>    
        </BrowserRouter>
    );
    const loginbtn = screen.getByRole("button",  {name:"Login"});
    fireEvent.click(loginbtn);   //fireEvent - it will check On-click event.
    const logoutbtn = screen.getByRole("button",  {name:"Logout"});
    expect(logoutbtn).toBeInTheDocument();
});



