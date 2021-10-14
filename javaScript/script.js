import { englishToMorse } from "./modules/englishToMorse.js";
import { morseToEnglish } from "./modules/morseToEnglish.js";
import { recieveInput } from "./modules/recieveInput.js";

const translateBtn = document.querySelector(".container__selection__submit");
const translateType = document.querySelector(".container__options");
translateBtn.addEventListener("click", () => {
    const toTrans = recieveInput(document.querySelector(".container__input__text"));

    if(translateType.value === "english-to-morse"){
        englishToMorse(toTrans);
    } else if(translateType.value === "morse-to-english") {
        morseToEnglish(toTrans);
    } else {
        return;
    }
    //console.log(toTrans);
})