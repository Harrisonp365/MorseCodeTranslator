export const recieveInput = (inputVal) => {
    let toTranslateValue = "";

    if(!inputVal) 
        throw new Error("Please enter morse code or english");
    else 
        toTranslateValue = inputVal.value;
    // console.log(toTranslateValue);
    return toTranslateValue;
}