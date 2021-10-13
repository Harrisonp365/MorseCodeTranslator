export const recieveInput = (inputVal) => {
    let toTranslateValue = "";

    if(!inputVal.value) {
        alert("Please enter english or morse code")
    } else if(typeof inputVal.value !== "string"){
        alert("undefined paramater")
    } else {
        return toTranslateValue = inputVal.value;
    }
    console.log(toTranslateValue);
    return toTranslateValue;
}