import { morse } from "./morse.js";

export const englishToMorse = (input) => {
    let translated = input;
    translated = translated.toLowerCase();
    translated = translated.split("");

    for(let i = 0; i < translated.length; i++) {
        translated[i] = morse[translated[i]];
    }
    translated = translated.join(" ");

    if(!translated){
        throw new Error("Output is incorrect, please make sure the correct option is selected");
    }
    //console.log("converted: ", translated)
    return translated;
}