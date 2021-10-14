import { it, test } from "@jest/globals"
import { describe } from "yargs"
import { englishToMorse } from "../modules/englishToMorse.js";

describe("Checks input is correct and also returns the correct output"), () => {
    const returnError = new Error("Output is incorrect, please make sure the correct option is selected");

    it("Should return Morse code if english is input"), () => {
        expect(englishToMorse("d")).toBe("-..");
        expect(englishToMorse("o")).toBe("---");
        expect(englishToMorse("english")).toBe(". -. --. .-.. .. ... ....")
    };

    it("Should return an error if there is not output"), () => {
        expect(() => englishToMorse()).toThrowError(returnError);
    }
}