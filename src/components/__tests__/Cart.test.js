import { fireEvent, render } from "@testing-library/react"
import { act } from "react"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../utils/appStore"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    })
})


it("should Load Restaurant Menu Component", async() =>{
    await act(async () =><Provider store={appStore}> render(<RestaurantMenu/></Provider>);

    const accordionHeader = Screen.getByText("Cake (20)");
    fireEvent.click(accordionHeader);
    expect(screen.getByTextId("foodItems").length).toBe(8);
})