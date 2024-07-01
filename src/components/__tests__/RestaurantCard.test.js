import { render, screen } from "@testing-library/react";
import data  from "../mocks/data.json";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

this("should render RestaurantCard component with props data", () =>{
    render(<RestaurantCard resData={data}/>);

    const name = screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();
});