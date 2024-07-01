import { sum } from "../sum"

// syntax                
// test('description ', () => {    <--- arrow function
//   test cases
// });


test('Sum function should calculated the sum of two number', () => {
    const result = sum (3, 4);
    
    //Assertion
    expect(result).toBe(7);
});
