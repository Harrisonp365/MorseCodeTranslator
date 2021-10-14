import { it, test } from "@jest/globals"
import { describe } from "yargs"
import { recieveInput } from "../modules/recieveInput.js";

describe("Checks input is correct and also returns the correct output"), () => {
    const paramTypeError = new Error("Must enter morse code or english");
    it("Should only take in params which are in the alphabet"), () => { 
        expect(() => recieveInput({})).toThrowError(paramTypeError);
    };

    it("Should return an alert if nothing is input"), () => {
        expect(() => recieveInput()).toThrowError(paramTypeError);
    };

}