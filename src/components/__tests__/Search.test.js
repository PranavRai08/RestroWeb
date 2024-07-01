import { render, screen, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import data from "../mocks/data.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(data);
        }
    })
})

it("Should render Body component with Search", async() =>{

    await act(async () =>
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(20);
    // const searchBtn = screen.getByRole("button", {name: "Search"});
    //    const searchInput = screen.getByTestId("searchInput");

    //    fireEvent.change(searchInput, {target: {value: "burger"}});


    //    fireEvent.click(searchBtn);
    //    const cards = screen.getAllByTestId("resCard");

    //    expect(cards.length).toBe(1);

    // console.log(searchBtn);
    // expect(searchBtn).toBeInTheDocument();
});