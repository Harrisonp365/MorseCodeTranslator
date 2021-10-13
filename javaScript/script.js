import { englishToMorse } from "./modules/englishToMorse.js";
import { morseToEnglish } from "./modules/morseToEnglish.js";
import { recieveInput } from "./modules/recieveInput.js";

const translateBtn = document.querySelector(".container__input__submit");
translateBtn.addEventListener("click", () => {
    const toTrans = recieveInput(document.querySelector(".container__input__text"));
    //morseToEnglish(toTrans);
    englishToMorse(toTrans);
    console.log(toTrans);
})