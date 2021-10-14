import { morseToEnglish } from "../modules/morseToEnglish.js";

describe("Returns the correct output", () => {
    const returnError = new Error("Output is incorrect, please make sure the correct option is selected");

    it("Should return English if morse code is input", () => {
        expect(morseToEnglish("-..")).toBe("d");
        expect(morseToEnglish("---")).toBe("o");
        expect(morseToEnglish(". -. --. .-.. .. ... ....")).toBe("english");
        expect(morseToEnglish(". -. --. .-.. .. ... .... / . -. --. .-.. .. ... ....")).toBe("english english");
    });

    it("Should return an error if output is incorrect", () => {
        expect(() => morseToEnglish()).toThrowError(returnError);
    });
});