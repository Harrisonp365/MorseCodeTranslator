import { morse } from "./alphabet.js";

export const englishToMorse = (input) => {
    let translated = input;
    translated = translated.toLowerCase();
    translated = translated.split("");

    for(let i = 0; i < translated.length; i++) {
        translated[i] = morse[translated[i]];
    }
    translated = translated.join("");
    console.log("converted: ", translated)
    return translated;
}