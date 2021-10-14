import { englishToMorse } from "./modules/englishToMorse.js";
import { morseToEnglish } from "./modules/morseToEnglish.js";
import { recieveInput } from "./modules/recieveInput.js";

const translateBtn = document.querySelector(".container__selection__submit");
const translateType = document.querySelector(".container__options");
translateBtn.addEventListener("click", () => {
    const toTrans = recieveInput(document.querySelector(".container__input__text"));

    let translated = "";

    if(translateType.value === "english-to-morse"){
        translated = englishToMorse(toTrans);
        //console.log("eng to morse",translated);
    } else if(translateType.value === "morse-to-english") {
        translated = morseToEnglish(toTrans);
        //console.log("morse to eng",translated);
    } else 
        return;

    const outputElem = document.createElement("p");
    outputElem.className = "container__output__text";
    const outputText = translated;
    const outputTextNode = document.createTextNode(outputText);
    outputElem.appendChild(outputTextNode);
    const outputContainer = document.querySelector(".container__output");
    outputContainer.appendChild(outputElem);
});