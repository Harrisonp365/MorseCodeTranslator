import { morse } from "./morse.js";

export const englishToMorse = (input) => {
    if(!input)
        throw new Error("Output is incorrect, please make sure the correct option is selected");
    
    let translated = input.toLowerCase();
    translated = translated.split("");

    for(let i = 0; i < translated.length; i++) {
        translated[i] = morse[translated[i]];
    }
    translated = translated.join(" ");
    //console.log("converted: ", translated)
    return translated;
}