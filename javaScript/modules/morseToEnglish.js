import { alphabet } from "./alphabet.js";

export const morseToEnglish = (input) => {
    if(!input)
        throw new Error("Output is incorrect, please make sure the correct option is selected");
    
    let translated = [];
    //Map and split by delimiter
    input.split("/").map(function(word) {
    //Then map through each letter delimited by a space
        word.split(" ").map(function(letter) {
    //Push each letter to translated arr
            translated.push(alphabet[letter]);
        });
    //Push each completed word into the arr
        translated.push(" ");
    });
    return translated.join("").trim();
    //fails test without using trim as has the trailing space
}