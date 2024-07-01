import { render, screen } from "@testing-library/react";
import Contect from "../Contect";
import "@testing-library/jest-dom";

describe("Should load contect us component", () =>{ //describe : it use to write multiple test cases of one of the component.
    // or we can say grouping test cases.
    //for heading
 it('Should load contect us component', () =>{  // we can write "it" also insted of test.
    render(<Contect/>);

    const heading = screen.getByRole("heading");
    
    //Assertion
    expect(heading).toBeInTheDocument();

});

//for button
test('Should load button inside Contect us component', () =>{
    render(<Contect/>);

    const button = screen.getByRole("button");
    
    //Assertion
    expect(button).toBeInTheDocument();

});

//for input
test('Should load 2 input boxes on Contect component', () =>{
    //render
    render(<Contect/>);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    
    //Assertion
    expect(inputBoxes.length).toBe(2);
    // console.log(inputBoxes);

});

});