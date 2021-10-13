import { alphabet } from "./alphabet.js";

export const morseToEnglish = (input) => {
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

    console.log(translated.join(""));
    return translated.join("");
}