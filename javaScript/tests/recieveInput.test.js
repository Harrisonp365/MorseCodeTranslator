import { recieveInput } from "../modules/recieveInput.js";

describe("Checks input is correct and also returns the correct output", () => {
    const paramTypeError = new Error("Please enter morse code or english");
    
    it("Should only take in params which are in the alphabet", () => { 
        expect(() => recieveInput({})).toThrowError(paramTypeError);
        expect(() => recieveInput()).toThrowError(paramTypeError);
    });
});